import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import { themeColors } from "../theme/Constants";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function PlantCard({ item }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: `${themeColors.bgTrans}50`,
        height: ios ? height * 0.4 : height * 0.4,
        width: width * 0.65,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          marginTop: ios ? -(height * 0.08) : 15,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ borderRadius: 80, height: 160, width: 160 }}
        />
      </View>

      {/* Name and Arrow */}
      <View
        style={{
          backgroundColor: ios ? themeColors.bgDark : "transparent",
          shadowColor: themeColors.bgDark,
          shadowRadius: 25,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>{item.name}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Product", { ...item })}
          style={{
            shadowColor: "black",
            shadowRadius: 40,
            shadowOffset: { width: -10, height: -10 },
            shadowOpacity: 1,
            backgroundColor: "white",
            borderRadius: 40,
            padding: 10,
          }}
        >
          <ArrowRightIcon
            size={13}
            strokeWidth={5}
            color={themeColors.bgLight}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
