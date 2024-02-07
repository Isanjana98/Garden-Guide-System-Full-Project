import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftCircleIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/outline";
import { HeartIcon, StarIcon } from "react-native-heroicons/solid";

import { themeColors } from "../theme/Constants";
import { ShoppingBag } from "react-native-feather";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function PlantScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState("sec1");
  const navigation = useNavigation();
  // Function to render different sections based on the selected section
  const renderSection = () => {
    if (size === "sec1") {
      return (
        <View>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
          >
            Details in Brief
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Calling Name: {item.name}
          </Text>
          <Text
            style={{
              fontStyle: "italic",
              color: "white",
              fontWeight: "bold",
              arginTop: 5,
            }}
          >
            Scientific Name: {item.scientificName}
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Sinhala Name: {item.other_name}
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Tamil Name: {item.name_in_other_language}
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Family: {item.kingdom}
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Country: {item.country}
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Clade: {item.clade}
          </Text>
        </View>
      );
    } else if (size === "sec2") {
      return (
        <View>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
          >
            Speciality of the Plant
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            {" "}
            {item.specialty}
          </Text>
        </View>
      );
    } else if (size === "sec3") {
      return (
        <View>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
          >
            History of the Plant
          </Text>
          <Text style={{ color: "white", marginTop: 5 }}>{item.history}</Text>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bgDark }}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg5.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          width: "100%",
          position: "absolute",
        }}
      />
      <SafeAreaView style={{ padding: 20, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ padding: 10 }}
          >
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 50,
            }}
          >
            <HeartIcon size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
            alignItems: "center",
            marginTop: ios ? 0 : 40,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ height: 180, width: 180, borderRadius: 80 }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 13 }}>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Plant Details
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => setSize("sec1")}
              style={{
                backgroundColor:
                  size == "sec1" ? themeColors.bgLight : "rgba(0, 0, 0, 0.07)",
                padding: 12,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ color: size == "sec1" ? "white" : "gray" }}>
                Section I
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("sec2")}
              style={{
                backgroundColor:
                  size == "sec2" ? themeColors.bgLight : "rgba(0, 0, 0, 0.07)",
                padding: 12,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ color: size == "sec2" ? "white" : "gray" }}>
                Section II
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("sec3")}
              style={{
                backgroundColor:
                  size == "sec3" ? themeColors.bgLight : "rgba(0, 0, 0, 0.07)",
                padding: 12,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ color: size == "sec3" ? "white" : "gray" }}>
                Section III
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          {/* <Text
            style={{
              color: themeColors.text,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Details In Brief
          </Text>
          <Text style={{ color: "white", marginTop: 10 }}>{item.desc}</Text> */}
          {renderSection()}
        </View>
      </SafeAreaView>
    </View>
  );
}
