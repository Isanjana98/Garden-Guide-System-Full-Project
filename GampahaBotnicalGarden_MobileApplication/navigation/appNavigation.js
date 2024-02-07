import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnlineonsiteScreen from "../screens/OnlineonsiteScreen";
import OnsiteHomePage from "../screens/OnsiteHomePage";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import QRCodeInstructionPage from "../screens/QRCodeInstructionPage";
import MapPage from "../screens/MapPage";
import PlantCategory from "../screens/PlantCategory";
import PlantList from "../screens/PlantList";
import ScanQR from "../screens/ScanQR";
import ZinkTag from "../screens/ZinkTag";
import ScanButton from "../screens/ScanButton";
import { Dimensions, LogBox, Platform, Text, View } from "react-native";

import { themeColors } from "../theme/Constants";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  QueueListIcon as QueueListOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  QueueListIcon as QueueListSolid,
} from "react-native-heroicons/solid";
import PlantScreen from "../screens/PlantScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   contentStyle: { backgroundColor: "black" },
        // }}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="OnlineonsiteScreen"
          component={OnlineonsiteScreen}
        />
        <Stack.Screen name="OnsiteHomePage" component={OnsiteHomePage} />

        <Stack.Screen
          name="QRCodeInstructionPage"
          component={QRCodeInstructionPage}
        />
        <Stack.Screen name="PlantList" component={PlantList} />

        <Stack.Screen name="PlantCategory" component={HomeTabs} />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={PlantScreen}
        />

        <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="ScanButton" component={ScanButton} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ZinkTag" component={ZinkTag} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 40,
          height: 63,
          alignItems: "center",

          borderRadius: 90,
          marginHorizontal: 20,
          backgroundColor: `${themeColors.bgTrans}50`,
        },
        tabBarItemStyle: {
          marginTop: ios ? 30 : 0,
        },
      })}
    >
      <Tab.Screen name="home" component={PlantCategory} />
      <Tab.Screen name="favourite" component={PlantCategory} />
      <Tab.Screen name="cart" component={PlantCategory} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "home") {
    icon = focused ? (
      <HomeSolid size="25" color={themeColors.bgDark} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="black" />
    );
  } else if (route.name === "favourite") {
    icon = focused ? (
      <HeartSolid size="25" color={themeColors.bgDark} />
    ) : (
      <HeartOutline size="30" strokeWidth={2} color="black" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <QueueListSolid size="25" color={themeColors.bgDark} />
    ) : (
      <QueueListOutline size="30" strokeWidth={2} color="black" />
    );
  }

  let buttonClass = focused ? "bg-black" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow  " + buttonClass}
    >
      {icon}
    </View>
  );
};
