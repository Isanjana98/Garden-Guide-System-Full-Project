import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { categories, plantItems } from "../constants/index";

const PlantList = () => {
  // Extract the plant names from the plantItems dataset
  const plants = Object.values(plantItems).flatMap((items) =>
    items.map((item) => item.name)
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg3.png")}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.buttonContainer}>
          {plants.map((plant, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => console.log(`${plant} selected`)} // Add your button press logic here
            >
              <Text style={styles.buttonText}>{plant}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // To make the container transparent
    marginTop: 80,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "whitesmoke",
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 5,
    width: "80%",
    height: "5%",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8, // You can adjust the opacity to make the buttons semi-transparent
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlantList;
