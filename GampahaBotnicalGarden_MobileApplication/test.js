import * as React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get("window");

const QRCodeInstructionPage = () => {
  return (
    <View style={styles.qrCodeInstructionPage}>
      <Image
        style={[styles.icon, styles.groupPosition1]}
        resizeMode="cover"
        source={require("../assets/images/bg3.png")}
      />
      <Image
        style={[styles.qrCodeInstructionPageChild, styles.codeLayout]}
        resizeMode="cover"
        source={require("../assets/images/backArrow.png")}
      />
      <Image
        style={[styles.qrCodeInstructionPageItem, styles.codeLayout]}
        resizeMode="cover"
        source={require("../assets/images/dropDownIcon.png")}
      />
      <View style={[styles.qrCodeInstructionPageInner, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <Image
              style={[styles.dgdQrIcon1, styles.dgdIconPosition]}
              resizeMode="cover"
              source={require("../assets/images/QRicon.png")}
            />
            <Text style={styles.scanQr}>Scan QR</Text>
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
      <Text style={styles.enterTheZink}>{`Enter the Zink Tag 
Number Here`}</Text>
      {/* <Image
        style={styles.untitled11Icon}
        resizeMode="cover"
        source={require("../assets/untitled1-1.png")}
      /> */}
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
  codeLayout: {
    height: "2%",
    position: "absolute",
  },
  groupLayout1: {
    height: "15%",
    width: "16%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  dgdIconPosition: {
    width: "8%",
    left: "5%",
    position: "absolute",
  },
  noQrCodeLayout: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.white,
    lineHeight: height * 0.015,
    letterSpacing: width * 0.005,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  qrCodeInstructionPageChild: {
    top: "4%",
    left: "2.9%",
    width: "0.8%",
  },
  qrCodeInstructionPageItem: {
    top: "3.9%",
    left: "30.9%",
    width: "1.7%",
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
    fontFamily: FontFamily.poppinsLight,
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
  qrCodeInstructionPageInner: {
    top: "31.5%",
    left: "23.9%",
  },
  clickMeTo: {
    top: "21.4%",
    left: "25.2%",
  },
  noQrCode: {
    top: "44.5%",
    left: "25.1%",
  },
  vectorIcon: {
    top: "25.8%",
    left: "28.4%",
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
    top: "49.3%",
    left: "25.4%",
    fontSize: FontSize.size_3xs,
    letterSpacing: width * 0.007,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtralight,
    width: "10%",
    height: "2.1%",
    opacity: 0.5,
    textAlign: "center",
    color: Color.white,
    lineHeight: height * 0.01,
    position: "absolute",
  }, 
  // untitled11Icon: {
  //   top: 1808,
  //   left: 756,
  //   width: 251,
  //   height: 581,
  //   position: "absolute",
  // },
  instructionImg: {
    top: height * 0.106,
    left: width * 0.007,
    width: width * 0.221,
    height: height * 0.511,
    position: "absolute",
  },
});

export default QRCodeInstructionPage;