import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BtnHome from "./BtnHome";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const QRCodeInstructionPage = () => {
  const navigation = useNavigation(); // Initialize navigation
  const handleQRPress = () => {
    navigation.navigate("ScanButton"); // Navigate to scanQR.js file
  };
  const handleTypeZinkTagPress = () => {
    navigation.navigate("ZinkTag"); // Navigate to TypeZinktag.js file
  };

  const handleZinkNumberPress = () => {
    navigation.navigate("ZinkTag"); // Navigate to zinkNumber.js file
  };
  return (
    <View style={styles.qrCodeInstructionPage}>
      <Image
        style={[styles.backgroungQRIns, styles.groupPosition1]}
        resizeMode="cover"
        source={require("../assets/images/bg3.png")}
      />
      <Image
        style={[styles.backArrow, styles.codeLayout]}
        resizeMode="cover"
        source={require("../assets/images/backArrow.png")}
      />

      <View style={[styles.qrCodeInstructionPageInner, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <TouchableOpacity
              style={styles.QRIconPosition}
              onPress={handleQRPress}
            >
              <Image
                style={[styles.QrIcon1, styles.QRIconPosition]}
                resizeMode="cover"
                source={require("../assets/images/QRicon.png")}
              />
            </TouchableOpacity>
            <Text style={styles.scanQr} onPress={handleQRPress}>
              Scan QR
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.clickMeTo, styles.noQrCodeLayout]}>
        Click me to go to QR code scanner
      </Text>
      <Text style={[styles.noQrCode, styles.noQrCodeLayout]}>
        No QR code near your plant?
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/images/vector5DownArrow.png")}
      />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.dgdQrIcon11, styles.dgdIconPosition]} />
        </View>
      </View>
      <Text style={[styles.enterTheZink, styles.zinkButtonContainer]}>
        <BtnHome
          bgColor={Color.white}
          width={"20%"}
          btnLabel="Zink Tag "
          textColor={Color.black}
          Press={handleTypeZinkTagPress}
        />
      </Text>
      <TouchableOpacity
        style={styles.zinkButton}
        onPress={handleZinkNumberPress}
      >
        <Text style={styles.zinkButtonText}>Zink Number</Text>
      </TouchableOpacity>
      <Image
        style={styles.instructionImg}
        resizeMode="cover"
        source={require("../assets/images/instructionImg.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeInstructionPage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  groupPosition1: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  zinkButtonContainer: {
    width: "20%",
    opacity: 0,
  },

  codeLayout: {
    height: "2%",
    position: "absolute",
  },
  groupLayout1: {
    height: "15%",
    width: "16%",
    position: "absolute",
    top: "30%",
  },

  groupPosition: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },

  //QR Icon Position
  QRIconPosition: {
    left: "13700%",
    position: "absolute",
  },
  noQrCodeLayout: {
    // fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.white,
    lineHeight: height * 0.015,
    letterSpacing: width * 0.005,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  backgroungQRIns: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backArrow: {
    top: "6%",
    left: "8%",
    width: "3%",
  },
  qrCodeInstructionPageItem: {
    top: "5.9%",
    // left: "50.9%",
    right: "5%",
    width: "8%",
    height: "8%",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  dgdQrIcon1: {
    top: "1.7%",
    height: "4.7%",
  },
  scanQr: {
    top: "7.1%",
    left: "2.1%",
    fontWeight: "300",
    // fontFamily: FontFamily.poppinsLight,
    textAlign: "left",
    width: "6.3%",
    color: Color.white,
    lineHeight: height * 0.01,
    letterSpacing: width * 0.01,
    fontSize: FontSize.size_3xs,
    height: "1.3%",
    position: "absolute",
  },
  groupWrapper: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  zinkButton: {
    backgroundColor: Color.white,
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center",
  },
  zinkButtonText: {
    // fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    // fontSize: FontSize.size_sm,
  },
  qrCodeInstructionPageInner: {
    top: "31.5%",
    left: "23.9%",
  },

  //Click Me to GET qr Text
  clickMeTo: {
    top: "21.4%",
    left: "75%",
    width: "20%",
  },
  noQrCode: {
    top: "85%",
    left: "25%",
    width: "50%",
  },
  vectorIcon: {
    top: "27%",
    left: "85%",
    width: "1%",
    height: "5%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  dgdQrIcon11: {
    top: "0.6%",
    height: "1.8%",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  groupView: {
    top: "48.4%",
    left: "23.9%",
  },
  enterTheZink: {
    top: "90%",
    left: "40%",
    //fontSize: 55,
    letterSpacing: width * 0.007,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtralight,
    width: "5%",
    height: "20%",
    opacity: 0.9,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },

  instructionImg: {
    top: "10%",
    left: "5%",
    width: "63%",
    height: "70%",
    position: "absolute",
  },
});

export default QRCodeInstructionPage;
