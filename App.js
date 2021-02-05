import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/components/Routes";
import InternetStatus from "./src/components/InternetStatus";

export default function App() {
  return (
    <NavigationContainer>
      <InternetStatus />
      <Routes />
    </NavigationContainer>
  );
}
