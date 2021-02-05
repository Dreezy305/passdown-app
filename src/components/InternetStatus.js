import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { Column as Col, Row } from "react-native-flexbox-grid";
import Icon from "react-native-vector-icons/Ionicons";
import NetInfo from "@react-native-community/netinfo";
import * as Font from "expo-font";

const customFonts = {
  Quicksand: require("../fonts/Quicksand-Medium.ttf"),
  QuicksandBold: require("../fonts/Quicksand-Bold.ttf"),
};

export default function InternetStatus() {
  const [network, updateNetwork] = useState(false);

  useEffect(() => {
    // Font.loadAsync(customFonts);
    NetInfo.addEventListener((state) => {
      updateNetwork(state.isConnected);
    });
  }, [network]);

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc",
        zIndex: 100000,
        opacity: 0.9,
        display: network ? "none" : "flex",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 100,
          width: "100%",
          backgroundColor: "#cb0000",
          alignItems: "center",
          padding: 10,
          opacity: 1,
          zIndex: 50000,
        }}
      >
        <View style={{ width: Dimensions.get("window").width - 40 }}>
          <Row>
            <Col sm={3}>
              <Icon name="ios-cellular" size={32} color="#fff" />
            </Col>
            <Col sm={9}>
              <Text style={{ color: "#fff", fontSize: 16 }}>
                You are not connected to internet. Please check your connection.
              </Text>
            </Col>
          </Row>
        </View>
      </View>
    </View>
  );
}
