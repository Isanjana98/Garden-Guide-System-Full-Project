import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";

const { width } = Dimensions.get("window");

const OnlineonsiteScreen = (props) => {
  const width = useResponsiveWidth(100);
  const height = useResponsiveHeight(100);
  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/images/bg.png")}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.henarathgodaBotanicalGarden}>Henarathgoda</Text>
        <Text style={styles.henarathgodaBotanicalGarden}>Botanical</Text>
        <Text style={styles.henarathgodaBotanicalGarden}>Garden</Text>
        <Text style={styles.gampaha}> Gampaha</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Text style={styles.tellUsWhere}>Tell us where you are</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={[styles.button, styles.buttonLeft]}
            >
              <Text style={styles.buttonText}>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("OnsiteHomePage")}
              style={[styles.button, styles.buttonRight]}
            >
              <Text style={styles.buttonText}>Onsite</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  henarathgodaBotanicalGarden: {
    fontSize: 40,
    fontWeight: "300",
    color: "#fff",
    textAlign: "left",
  },
  gampaha: {
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    left: 0,
    right: 0,
  },
  buttonBox: {
    borderRadius: 15,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderColor: "rgba(255, 255, 255, 0.17)",
    borderWidth: 3,
    width: "110%",
    height: "180%",
    alignItems: "center",
    justifyContent: "center",
  },
  tellUsWhere: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 63,
    width: 135,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(235, 235, 235, 0.01)",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
  },
  buttonLeft: {
    left: 20,
  },
  buttonRight: {
    right: 20,
  },
});

export default OnlineonsiteScreen;
