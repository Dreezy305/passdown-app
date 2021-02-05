import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Auth from "../screens/Auth";
import EntrySignup from "../screens/EntrySignup";
import EntryLogin from "../screens/EntryLogin";
import Main from "../screens/Main";
import Gift from "../screens/Gift";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EntrySignup"
        component={EntrySignup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EntryLogin"
        component={EntryLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gift"
        component={Gift}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
