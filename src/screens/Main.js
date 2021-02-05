import * as React from "react";
import { Text, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Gift from "./Gift";
import Notification from "./Notification";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Gift"
        component={Gift}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../images/icons/activity-fill.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ) : (
              <Image
                source={require("../images/icons/activity.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../images/icons/bell-fill.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ) : (
              <Image
                source={require("../images/icons/bell.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../images/icons/person-fill.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ) : (
              <Image
                source={require("../images/icons/person.png")}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "contain",
                  marginTop: 15,
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
