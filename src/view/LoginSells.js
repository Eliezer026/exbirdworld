import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import SellsLogin from "./SellsLogin";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class LoginSells extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("../assets/loroo.jpeg")]);
    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <SellsLogin />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginSells;
