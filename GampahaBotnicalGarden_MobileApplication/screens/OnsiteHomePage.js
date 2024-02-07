import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const OnsiteHomePage = (props) => {
  const navigation = useNavigation();
  const width = useResponsiveWidth(100);
  const height = useResponsiveHeight(100);

  return (
    <View style={[styles.onsiteHomePage, { width, height }]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/images/bg2.png")}
      />
      <View style={styles.onsiteHomePageChild} />
      <Text style={styles.henarathgodaBotanicalGardenContainer}>
        Henarathgoda Botanical Garden
      </Text>
      <Text style={styles.loremIpsumIs}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <TouchableOpacity onPress={() => {}} style={styles.plant1Icon}>
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../assets/images/plantIcon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.onsiteHomePageItem}>
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../assets/images/backArrow.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.groupView}>
        <Text style={styles.scanQr}>Scan QR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.groupView}>
        <Text style={styles.map}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.onsiteHomePageInner1}>
        <Text style={styles.categories}>Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("QRCodeInstructionPage")}
        style={styles.qrIconPng1}
      >
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../assets/images/QRicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("MapPage")}
        style={styles.mapIconPng1}
      >
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../assets/images/mapIcon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PlantCategory")}
        style={styles.plant2Icon}
      >
        <Image
          style={styles.iconButton}
          resizeMode="cover"
          source={require("../assets/images/plantIcon.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/images/rectangle-27.png")}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  // onsiteHomePage: {
  //   backgroundColor: Color.white,
  //   flex: 1,
  //   overflow: "hidden",
  // },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  onsiteHomePageChild: {
    top: 247,
    backgroundColor: "rgba(217, 217, 217, 0.02)",
    width: 342,
    height: 276,
    left: 9,
    borderRadius: Border.br_6xl,
  },
  henarathgodaBotanicalGardenContainer: {
    top: 272,
    left: 39,
    width: 285,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  loremIpsumIs: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    top: 306,
    left: 39,
    width: 285,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  plant1Icon: {
    top: 17,
    left: 300,
    width: 40,
    height: 56,
    position: "absolute",
  },
  onsiteHomePageItem: {
    top: 39,
    left: 31,
    width: 8,
    height: 13,
    position: "absolute",
  },

  scanQr: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    top: 60,
    right: 130,
    width: 53,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  groupView: {
    left: 140,
    top: 533,
    width: 84,
    position: "absolute",
  },
  map: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    top: 60,
    left: 30,
    width: 24,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  onsiteHomePageInner1: {
    left: 254,
    top: 533,
    width: 84,
    position: "absolute",
  },
  categories: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    top: 60,
    left: 9,
    width: 66,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mapIconPng1: {
    top: 547,
    left: 158,
    width: 48,
    height: 44,
    position: "absolute",
  },
  qrIconPng1: {
    top: 547,
    left: 40,
    width: 48,
    height: 44,
    position: "absolute",
  },
  plant2Icon: {
    top: 540,
    left: 276,
    width: 44,
    height: 62,
    position: "absolute",
  },
  rectangleIcon: {
    top: 103,
    left: 62,
    width: 235,
    height: 45,
    position: "absolute",
  },
  lineView: {
    top: 111,
    left: 180,
    borderStyle: "solid",
    borderColor: "#fff",
    borderRightWidth: 1,
    width: 1,
    height: 30,
    position: "absolute",
  },
  onsiteHomePage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default OnsiteHomePage;
