import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Platform,
  Image,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import InternetStatus from "../components/InternetStatus";
import Icon from "react-native-vector-icons/Ionicons";
import { Column as Col, Row } from "react-native-flexbox-grid";
import * as Facebook from "expo-facebook";
import { FACEBOOK_ID, API_URL, API_KEY } from "../components/Constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EntrySignup({ navigation }) {
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
      <StatusBar backgroundColor="#F0F8FF" barStyle="dark-content" />

      <View style={styles.bg}>
        <Animatable.View
          animation="fadeInDown"
          duration={2000}
          style={styles.header}
        >
          <Text
            style={{
              fontFamily: "sans-serif",
              fontSize: 50,
              fontWeight: "bold",
              color: "#4facfe",
            }}
          >
            Passdown
          </Text>
          <Text style={styles.text}>Social good for each other...</Text>
        </Animatable.View>

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: Platform.OS === "ios" ? 70 : 40,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigate("Main")}
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
                      fontFamily: "AvenirNext-Bold",
                    }}
                  >
                    Signup with Facebook
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={{
                backgroundColor: "#cb0000",
                padding: 15,
                borderRadius: 5,
                width: 300,
                marginBottom: 10,
              }}
            >
              <Row>
                <Col sm={3}>
                  <Icon
                    name="logo-google"
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
                    Signup with Google
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={{
                backgroundColor: "rgb(29, 161, 242)",
                padding: 15,
                borderRadius: 5,
                width: 300,
                marginBottom: 10,
              }}
            >
              <Row>
                <Col sm={3}>
                  <Icon
                    name="logo-twitter"
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
                    Signup with Twitter
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10, marginBottom: 10 }}
              onPress={() => navigation.navigate("EntryLogin")}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Quicksand",
                  color: "#444",
                }}
              >
                Already have account? Click to login.
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
    backgroundColor: "#F0F8FF",
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
    fontSize: 14,
    color: "#4facfe",
    textAlign: "center",
  },
  loader: {
    marginTop: 100,
  },
});
