import React from "react";
import { TextInput } from "react-native";
import { darkGreen } from "../theme/Constants";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

const Field = ({ onChangeText, ...props }) => {
  const width = useResponsiveWidth(78);
  const height = useResponsiveHeight(5);

  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 50,
        color: darkGreen,
        paddingHorizontal: 15,
        width,
        height,

        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 8,
      }}
      placeholderTextColor={darkGreen}
      onChangeText={onChangeText}
    />
  );
};

export default Field;
