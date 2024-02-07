import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

export default function Btn({ btnLabel, onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: Color.whitesmoke,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          padding: Padding.p_xl,
          height: 63,
          width: 135,
          borderWidth: 1,
          borderColor: Color.white,
          backgroundColor: Color.whitesmoke,
          borderRadius: Border.br_3xs,
        },
        style,
      ]}
    >
      <Text style={{ color: Color.white, fontSize: FontSize.size_lg }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
