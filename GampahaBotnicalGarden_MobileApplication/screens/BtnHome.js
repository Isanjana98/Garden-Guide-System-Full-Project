import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

export default function BtnHome({ bgColor, btnLabel, textColor, Press }) {
  const width = useResponsiveWidth(80);
  const height = useResponsiveHeight(5);

  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: height / 2,
        alignItems: "center",
        width: width * 0.9,
        paddingVertical: height * 0.2,
        marginVertical: height * 0.2,
        zIndex: 1,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: height * 0.5,
          fontWeight: "bold",
        }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
