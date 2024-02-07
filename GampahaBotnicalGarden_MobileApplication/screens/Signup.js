import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "./Background";
import BtnHome from "./BtnHome";
import { darkGreen } from "../theme/Constants";
import Field from "./Field";
import {BASE_URL} from "../constants/config";
import {
  useResponsiveHeight,
  useResponsiveWidth,
} from "react-native-responsive-dimensions";
import axios from "axios";

const Signup = (props) => {
  const width = useResponsiveWidth(100);
  const height = useResponsiveHeight(100);

  const fieldWidth = useResponsiveWidth(78);
  const btnWidth = useResponsiveWidth(70);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [contactNumber, setContactNUmber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSignUp = () => {
    // alert("Account created new");
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      username: userName,
      email: userName,
      password: password,
    };

    axios
      .post(`${BASE_URL}/garden/register`, requestBody)
      .then((response) => {
        // Handle the response from the server here
        alert("Account created new");
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width }}>
        <View style={{ marginTop: height * 0.15 }}>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.1,
              fontWeight: "bold",
              marginTop: height * 0.04,
              textAlign: "center",
            }}
          >
            Register
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.05,
              fontWeight: "bold",
              marginBottom: height * 0.02,
              // marginBottom: height * 0.05,
            }}
          >
            Create a new account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: height * 0.9,
            width,
            borderTopLeftRadius: width * 0.2,
            borderTopRightRadius: width * 0.2,
            paddingTop: height * 0.05,
            alignItems: "center",
          }}
        >
          <Field placeholder="First Name" onChangeText={setFirstName} />
          <Field placeholder="Last Name" onChangeText={setLastName} />
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
            onChangeText={setUserName}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={"number"}
            onChangeText={setContactNUmber}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={setPasswordConfirm}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              fieldWidth: "50%",
              width: "70%",
              marginRight: 5,
              marginLeft: 5,
              paddingRight: 20,
            }}
          >
            {/* <Text
              style={{
                color: "grey",
                fontSize: 16,
              }}
            >
              By signing in, you agree to our{" "}
            </Text> */}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            {/* <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & Conditions
            </Text>
            <Text style={{ color: "grey", fontSize: 16 }}>and </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text> */}
          </View>
          <BtnHome
            textColor="white"
            bgColor="#041911"
            btnLabel="Signup"
            // Press={() => {
            //   alert("Account created");
            //   props.navigation.navigate("Login");
            // }}
            Press={handleSignUp}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
