import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.gradient}>
        <Animatable.Text animation="fadeInDown" style={styles.header}>
          Passdown
        </Animatable.Text>
        <Text style={styles.text}>Social good for each other...</Text>
        <View style={styles.loader}>
          <ActivityIndicator color="#fff" size={"large"} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -100,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#fff",
    marginTop: 20,
  },
  loader: {
    marginTop: 100,
  },
});

export default Auth;
