import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native";

import Colors from "./color";
import Icon from "react-native-vector-icons/MaterialIcons";
import Bird from "./bird";
import ListBird from "./ListBird";
import SeeMore from "./SeeMore";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {
  const category = ["Todos", "Periquitos", "Agapornis", "Tucán", "Mas"];
  const [selectedCategoryIndex, setSelectCategoryIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const scrollx = React.useRef(new Animated.Value(0)).current;

  const CategoryList = () => {
    return (
      <View style={styles.categoryListContainer}>
        {category.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectCategoryIndex(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? Colors.primary
                      : Colors.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: Colors.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const CardIndexOne = ({ bird, index }) => {
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

  const Card = ({ bird, index }) => {
    console.log(index + "nullerwer");
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollx.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });

    const scale = scrollx.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    console.log(bird.id);
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.push("Details", bird)}
      >
        <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
          <Animated.View style={{ ...styles.cardOverLay, opacity }} />
          <View style={styles.priceTag}>
            <Text
              style={{ color: Colors.white, fontSize: 20, fontWeight: "bold" }}
            >
              ${bird.price}
            </Text>
          </View>
          <Image source={bird.image} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {bird.name}
                </Text>

                <Text style={{ color: Colors.grey, fontSize: 12 }}>
                  {bird.location}
                </Text>
              </View>
              <Icon name="bookmark-border" size={26} color={Colors.primary} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View></View>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const TopAvesCard = ({ aves }) => {
    return (
      <View style={styles.topAvesCard}>
        <Image style={styles.topAvesCardImage} source={aves.image} />
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>{aves.name}</Text>
          <Text
            style={{ fontWeight: 7, fontWeight: "bold", color: Colors.grey }}
          >
            {aves.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Ventas de</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}></Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: Colors.primary,
              }}
            >
              Aves Exoticas
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.searchInputContainer}>
        <Icon name="search" size={30} style={{ marginLeft: 20 }} />
        <TextInput
          placeholder="Buscar"
          style={{ fontSize: 20, paddingLeft: 10 }}
        />
      </View>
      <CategoryList />
      <View>
        {selectedCategoryIndex == 0 ? (
          <View>
            <View>
              <Animated.FlatList
                onMomentumScrollEnd={(e) => {
                  setActiveCardIndex(
                    Math.round(e.nativeEvent.contentOffset.x / cardWidth)
                  );
                }}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                  { useNativeDriver: true }
                )}
                horizontal
                data={Bird}
                contentContainerStyle={{
                  paddingVertical: 30,
                  paddingLeft: 20,
                  paddingRight: cardWidth / 2 - 40,
                }}
                showsHorizontalScrollIndicator={false}
                snapToInterval={cardWidth}
                renderItem={({ item, index }) => (
                  <Card bird={item} index={index} />
                )}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", color: Colors.grey }}>
                Aves Exotica
              </Text>
              <Text style={{ color: Colors.grey }}>Ver Mas</Text>
            </View>
            <FlatList
              data={Bird}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingLeft: 20,
                marginTop: 20,
                paddingBottom: 20,
              }}
              renderItem={({ item }) => <TopAvesCard aves={item} />}
            />
          </View>
        ) : (
          <View></View>
        )}

        {selectedCategoryIndex == 1 ? (
          <View>
            <ScrollView>
              <View>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                  }}
                  data={Bird}
                  renderItem={({ item, index }) => (
                    <ListBird
                      navigation={navigation}
                      bird={item}
                      index={index}
                    />
                  )}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <View></View>
        )}

        {selectedCategoryIndex == 2 ? (
          <View>
            <ScrollView>
              <View>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                  }}
                  data={Bird}
                  renderItem={({ item, index }) => (
                    <ListBird
                      navigation={navigation}
                      bird={item}
                      index={index}
                    />
                  )}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <View></View>
        )}

        {selectedCategoryIndex == 3 ? (
          <View>
            <ScrollView>
              <View>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                  }}
                  data={Bird}
                  renderItem={({ item, index }) => (
                    <ListBird
                      navigation={navigation}
                      bird={item}
                      index={index}
                    />
                  )}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <View></View>
        )}
        {selectedCategoryIndex == 4 ? (
          <View>
            <ScrollView>
              <View>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                  }}
                  data={Bird}
                  renderItem={({ item, index }) => (
                    <SeeMore
                      navigation={navigation}
                      bird={item}
                      index={index}
                    />
                  )}
                />
              </View>
            </ScrollView>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: Colors.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: Colors.light,
  },
  cardImage: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  CardIndexOne: {
    height: 190,
    width: width / 2 - 30,
    marginHorizontal: -15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: -20,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: Colors.primary,
    position: "absolute",
    zIndex: 1,
    right: 0,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: Colors.light,
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  cardOverLay: {
    height: 280,
    backgroundColor: Colors.white,
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
  },
  topAvesCard: {
    height: 120,
    width: 120,
    backgroundColor: Colors.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topAvesCardImage: {
    height: 80,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
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
});

export default HomeScreen;
