import React, { Component } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import Color from "./color";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";

const DetailScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item + "itme");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Color.white,
        paddingBottom: 215,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={styles.headerImage} source={item.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={Color.white}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <Icon name="home" color={Color.white} size={28} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: Color.grey,
              marginTop: 5,
            }}
          >
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ lineHeight: 20, color: Color.grey }}>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Text
            style={{ color: Color.white, fontSize: 18, fontWeight: "bold" }}
          >
            Compra Ahora
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: Color.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: Color.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 500,
    marginTop: 60,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    overflow: "hidden",
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
});

export default DetailScreen;
