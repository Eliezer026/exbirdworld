import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import Colors from "./color";

const { width } = Dimensions.get("screen");

const ListBird = ({ bird, index, navigation }) => {
  console.log(bird + "sdds" + index);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.push("Details", bird)}
    >
      <View style={styles.cardindexone}>
        <Image style={styles.CardIndexOne} source={bird.image} />

        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: Colors.primary,
            position: "absolute",
            zIndex: 1,
            right: 0,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 0,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: -5,
          }}
        >
          <Text
            style={{
              color: Colors.white,
            }}
          >
            Ver
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
    height: 190,
    width: width / 2 - 30,
    marginHorizontal: -15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: -20,
  },
});

export default ListBird;
