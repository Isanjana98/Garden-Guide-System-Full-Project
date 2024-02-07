import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
import BtnHome from "./BtnHome";
import { darkGreen, green } from "../theme/Constants";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

const Home = (props) => {
  const width = useResponsiveWidth(100);
  const height = useResponsiveHeight(100);
  return (
    <Background>
      <View
        style={{
          marginHorizontal: width * 0.15,
          marginVertical: height * 0.15,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={[
            styles.centeredView,
            { marginTop: height * 0.15, alignItems: "center" },
          ]}
        >
          <Text
            style={[
              styles.centeredText,
              { color: "white", fontSize: width * 0.08 },
            ]}
          >
            Join Us
          </Text>
          <Text
            style={[
              styles.centeredText,
              { color: "white", fontSize: width * 0.06 },
            ]}
          >
            &
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.06,
              marginBottom: height * 0.06,
            }}
          >
            Explore more on
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: width * 0.04,
              marginBottom: height * 0.2,
            }}
          >
            Henerathgoda Botanical Garden !!!
          </Text>
        </View>
        <View />
        <BtnHome
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <BtnHome
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
