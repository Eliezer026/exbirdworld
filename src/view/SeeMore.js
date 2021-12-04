import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
} from "react-native";

import Colors from "./color";

const { width } = Dimensions.get("screen");

const SeeMore = ({ bird, index, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.push("Details", bird)}
    >
      <View style={styles.cardindexone}>
        <Image style={styles.CardIndexOne} source={bird.image} />

        <View
          style={{
            height: 35,
            width: 140,
            backgroundColor: Colors.primary,
            position: "absolute",
            zIndex: 1,
            right: 25,
            bottom: 10,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: -5,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
            }}
          >
            {bird.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardindexone: {
    height: 170,
    backgroundColor: Colors.light,
    width: width / 2 - 30,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
  },
  CardIndexOne: {
    height: 120,
    width: width / 2 - 90,
    marginHorizontal: 15,
    borderRadius: 400,
    marginBottom: 10,
    marginTop: -9,
  },
});

export default SeeMore;
