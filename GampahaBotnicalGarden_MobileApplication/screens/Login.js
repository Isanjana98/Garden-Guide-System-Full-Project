import React, {useState, useEffect} from "react";
import {View, Text, Touchable, TouchableOpacity, Alert} from "react-native";
import Background from "./Background";
import BtnHome from "./BtnHome";
import {darkGreen} from "../theme/Constants";
import Field from "./Field";
import axios from "axios";

import {
    useResponsiveHeight,
    useResponsiveWidth,
} from "react-native-responsive-dimensions";
import {BASE_URL} from "../constants/config";
import {useNavigation} from "@react-navigation/native";

const Login = (props) => {
    const width = useResponsiveWidth(100);
    const height = useResponsiveHeight(100);
    const navigation = useNavigation();

    const fieldWidth = useResponsiveWidth(78);
    const btnWidth = useResponsiveWidth(70);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {
        // Verify the BASE_URL and input variables
        console.log('BASE_URL:', BASE_URL);
        console.log('userName:', userName);
        console.log('password:', password);

        const requestBody = {
            username: userName,
            password: password,
        };

        // Replace 'your_backend_endpoint' with the actual URL of your backend login API
        axios
            .post(`${BASE_URL}/garden/login`, requestBody)
            .then((response) => {
                // Handle the response from the server here
                console.info('Login successful:', response.data);
                navigation.navigate("OnsiteHomePage")
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });
    };

    return (
        <Background>
            <View style={{alignItems: "center", width}}>
                <View style={{marginTop: height * 0.15}}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: width * 0.1,
                            fontWeight: "bold",
                            marginVertical: height * 0.02,
                        }}
                    >
                        Login
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "white",
                        height: height * 0.9,
                        width: width,
                        borderTopLeftRadius: width * 0.2,
                        borderTopRightRadius: width * 0.2,
                        paddingTop: height * 0.1,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: darkGreen,
                            fontWeight: "bold",
                        }}
                    >
                        Welcome Back
                    </Text>
                    <Text
                        style={{
                            color: "grey",
                            fontSize: width * 0.03,
                            fontWeight: "bold",
                            marginBottom: height * 0.02,
                        }}
                    >
                        Login to your account
                    </Text>
                    <Field
                        placeholder="Email / Username"
                        keyboardType={"email-address"}
                        onChangeText={setUserName}
                        value={userName}
                    />
                    <Field
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <View
                        style={{
                            alignItems: "flex-end",
                            width: "78%",
                            paddingRight: 16,
                            marginBottom: 200,
                        }}
                    >
                        <Text
                            style={{color: darkGreen, fontWeight: "bold", fontSize: 16}}
                        >
                            Forgot Password ?
                        </Text>
                    </View>
                    <BtnHome
                        textColor="green"
                        bgColor={darkGreen}
                        btnLabel="Login"
                        Press={loginFunction}
                    />
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>
                            Don't have an account ?{" "}
                        </Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Signup")}
                        >
                            <Text
                                style={{color: darkGreen, fontWeight: "bold", fontSize: 16}}
                            >
                                Signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default Login;
