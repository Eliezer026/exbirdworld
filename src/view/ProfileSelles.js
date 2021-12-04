import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Colors from "./color";

class ProfileSelles extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicato={false}>
          <View style={styles.titleBar}></View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image source={require("../assets/canario.jpeg")} />
            </View>
            <View style={styles.dm}>
              <MaterialIcons
                name="chat"
                size={26}
                color={Colors.white}
              ></MaterialIcons>
            </View>
            <View style={styles.add}>
              <Ionicons
                name="ios-image"
                size={28}
                color={Colors.white}
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </View>
            <View style={styles.dmtwo}>
              <MaterialIcons
                style={{ marginLeft: 7, marginTop: 6 }}
                name="add"
                size={46}
                color={Colors.white}
              ></MaterialIcons>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "260", fontSize: 36 }]}>
              Julie
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 24 }]}>
              Photographer
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 26 }]}>4535</Text>
              <Text style={(styles.text, styles.subText)}> Publicacion </Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#DFD8C8",
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 26 }]}>356</Text>
              <Text style={(styles.text, styles.subText)}> Seguidores </Text>
            </View>
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/loroo.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/loroo.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/loroo.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>
            <View style={styles.mediaCount}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 34, color: "#DFD8C8", fontWeight: "300" },
                ]}
              >
                40+
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: "#DFD8C8",
                    textTransform: "uppercase",
                  },
                ]}
              >
                Imagen
              </Text>
            </View>
          </View>
          <Text style={[styles.subText, styles.recent]}>
            Informacion Personal:
          </Text>

          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View styles={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <MaterialIcons
                  style={{ fontSize: 20, marginLeft: -81, marginBottom: -21 }}
                  name="place"
                />
                <Text
                  style={[
                    styles.text,
                    {
                      marginLeft: -60,
                      marginTop: 9,
                      color: "#41444B",
                      fontWeight: "300",
                    },
                  ]}
                >
                  Ubicacion:{" "}
                  <Text style={{ fontWeight: "400" }}>
                    San Pedro de Macoris
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View styles={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <MaterialIcons
                  style={{ fontSize: 20, marginLeft: -81, marginBottom: -21 }}
                  name="home"
                />
                <Text
                  style={[
                    styles.text,
                    {
                      marginLeft: -60,
                      marginTop: 3,
                      color: "#41444B",
                      fontWeight: "300",
                    },
                  ]}
                >
                  Pais:{" "}
                  <Text style={{ fontWeight: "400" }}>
                    Republica Dominicana
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View styles={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Ionicons
                  style={{ fontSize: 20, marginLeft: -81, marginBottom: -21 }}
                  name="call"
                />
                <Text
                  style={[
                    styles.text,
                    {
                      marginLeft: -60,
                      marginTop: 3,
                      color: "#41444B",
                      fontWeight: "300",
                    },
                  ]}
                >
                  Telefono:{" "}
                  <Text style={{ fontWeight: "400" }}>829-642-9345</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 90,
    left: -90,
    width: 60,
    height: 60,
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  dmtwo: {
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 90,
    right: -90,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 20,
    left: 19,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 0,
    left: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 160,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "53%",
    marginTop: -50,
    marginLeft: 30,
    width: 90,
    height: 90,
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 15,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 18,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },

  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});

export default ProfileSelles;
