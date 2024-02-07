import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import bgImage from "../assets/images/bg3.png";
import axios from "axios";
import { BASE_URL } from "../constants/config";
import { useNavigation } from "@react-navigation/native";

const ZinkTag = () => {
  const [tagValue, setTagValue] = useState("");
  const [plant, setPlant] = useState(null);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (tagValue) {
      axios
        .get(`${BASE_URL}/garden/get_plant_by_id?plant_id=${tagValue}`)
        .then((response) => {
          setPlant(response.data);
          navigateToCard();
        })
        .catch((error) => {
          console.error(error.response.data.message);
        });
    }
  };

  const navigateToCard = () => {
    if (plant) {
      navigation.navigate("Product", { ...plant });
    }
  };

  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>Type Zink Tag Here</Text>

        <TextInput
          style={styles.input}
          placeholder="eg:1234"
          value={tagValue}
          onChangeText={setTagValue}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(235, 235, 235, 0.01)",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  input: {
    width: 250,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 25,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
  },
});

export default ZinkTag;
