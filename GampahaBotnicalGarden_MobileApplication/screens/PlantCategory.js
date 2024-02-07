import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../theme/Constants";
import { StatusBar } from "expo-status-bar";
import { categories, plantItems } from "../constants/index";
import Carousel from "react-native-snap-carousel";
import PlantCard from "../components/plantCard";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import axios from "axios";
import {BASE_URL} from "../constants/config";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function PlantCategory() {
  const [activeCategory, setActiveCategory] = useState(1);
  const searchBarMarginTop = height * 0.04;
  const categoriesMarginTop = height * 0.08;
  const categoriesPaddingHorizontal = width * 0.02;
  const PlantCardsMarginTop = height * 0.0;

  // Filter plant items based on the active category
  // const filteredPlantItems = plantItems[activeCategory] || [];
  const [filteredPlantItems, setFilteredPlantItems] = useState([]);

  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = () => {
    axios
      .get(`${BASE_URL}/garden/get_plant_categories`)
      .then((response) => {
        setCategoryData(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  const getCategoryPlant = (itemId) => {
    setActiveCategory(itemId);
    axios
      .get(`${BASE_URL}/garden/get_plants?category_id=` + itemId)
      .then((response) => {
        setFilteredPlantItems(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };



  useEffect(() => {
    if (categoryData.length > 0 && loading == false) {
      getCategoryPlant(categoryData[0].id);
    }
  }, [categoryData]);

  useEffect(() => {
    getCategories();
  }, []);

  const [searchText , setSearchText] = useState("")
  useEffect(()=>{
    console.log(searchText)
    if(searchText != "" || searchText != null){
      axios
          .get(`${BASE_URL}/garden/get_plant_by_name?plant_name=` + searchText)
          .then((response) => {
            setFilteredPlantItems(response.data);
          })
          .catch((error) => {
            console.error(error.response.data.message);
          });
    }
  } , [searchText])

  return (
    <ImageBackground
      source={require("../assets/images/bg5.png")}
      style={{ flex: 1 }}
    >
      {loading ? (
        <View style={{ flex: 1, position: "relative" }}>
          <StatusBar />

          <SafeAreaView style={ios ? { marginBottom: -8 } : null}>
            {/* search bar */}
            <View
              style={{
                marginHorizontal: 5,
                shadowOpacity: 0.2,
                marginTop: searchBarMarginTop,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 30,
                  backgroundColor: "#e6e6e6",
                }}
              >
                <TextInput
                  placeholder="Search"
                  style={{
                    padding: 15,
                    flex: 1,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: themeColors.bgLight,
                    borderRadius: 30,
                    padding: 10,
                  }}
                >
                  <MagnifyingGlassIcon
                    size={23}
                    strokeWidth={2}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* categories */}
            <View
              style={{
                paddingHorizontal: categoriesPaddingHorizontal,
                marginTop: categoriesMarginTop,
              }}
            >
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoryData}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ overflow: "visible" }}
                renderItem={({ item }) => {
                  const isActive = item.id === activeCategory;
                  const activeTextStyles = isActive
                    ? { color: "white" }
                    : { color: "gray" };
                  const categoryBackgroundColor = isActive
                    ? `${themeColors.bgTrans}50`
                    : "rgba(0, 0, 0, 0.07)";
                  const categoryBorderStyle = isActive
                    ? {}
                    : {
                        borderWidth: 1,
                        borderColor: `${themeColors.bgTrans}50`,
                      };
                  return (
                    <TouchableOpacity
                      onPress={() => getCategoryPlant(item.id)}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginRight: 10,
                        borderRadius: 10,
                        backgroundColor: categoryBackgroundColor,
                        ...categoryBorderStyle,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", ...activeTextStyles }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </SafeAreaView>

          {/* plant cards */}
          <View style={{ justifyContent: "center", flex: 1, marginTop: 6 }}>
            <View style={{ marginTop: PlantCardsMarginTop }}>
              <Carousel
                data={filteredPlantItems}
                renderItem={({ item }) => <PlantCard item={item} />}
                firstItem={1}
                loop={false} // set loop false
                inactiveSlideScale={0.75}
                inactiveSlideOpacity={0.75}
                sliderWidth={width}
                itemWidth={width * 0.63}
              />
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </ImageBackground>
  );
}
