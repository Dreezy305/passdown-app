import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Platform,
  Image,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Column as Col, Row } from "react-native-flexbox-grid";
import * as Facebook from "expo-facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_ID, API_URL, API_KEY } from "../components/Constant";

export default function EntryLogin({ navigation }) {
  const fbAuth = async () => {
    try {
      await Facebook.initializeAsync(FACEBOOK_ID);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile, email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`
        );
        let data = await response.json();
        data = JSON.stringify(data);
        Alert.alert("Logged in!", `Hi ${data}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff0f5" barStyle="dark-content" />

      <View style={styles.bg}>
        {/* <Animatable.View
          animation="fadeInDown"
          duration={2000}
          style={styles.header}
        >
          <Image
            source={require("../images/logo-preloader-2.png")}
            resizeMode="contain"
            style={{ height: 100, width: 200 }}
          />
          <Text
            style={{
              fontFamily: "QuicksandBold",
              fontSize: 50,
              color: "#BE0071",
            }}
          >
            intimate
          </Text>
          <Text style={styles.text}>Love . Connection . Activity</Text>
        </Animatable.View> */}

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: Platform.OS === "ios" ? 50 : 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={{
                backgroundColor: "#405DAE",
                padding: 15,
                borderRadius: 5,
                width: 300,
                marginBottom: 10,
              }}
              onPress={() => fbAuth()}
            >
              <Row>
                <Col sm={3}>
                  <Icon name="logo-facebook" color="#fff" size={25} />
                </Col>
                <Col sm={9}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                    }}
                  >
                    Login with Facebook
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                backgroundColor: "#85758F",
                padding: 15,
                borderRadius: 5,
                width: 300,
                marginBottom: 10,
              }}
            >
              <Row>
                <Col sm={3}>
                  <Icon
                    name="ios-mail"
                    color="#fff"
                    size={28}
                    style={{ marginTop: -5 }}
                  />
                </Col>
                <Col sm={9}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                    }}
                  >
                    Login with Email
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 10, marginBottom: 10 }}
              onPress={() => navigation.navigate("EntrySignup")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Quicksand",
                  color: "#444",
                }}
              >
                Don't have account? Click to signup.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f5",
  },
  bg: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 100 : 40,
  },
  text: {
    fontSize: 12,
    color: "#BE0071",
    textAlign: "center",
  },
  loader: {
    marginTop: 100,
  },
});
