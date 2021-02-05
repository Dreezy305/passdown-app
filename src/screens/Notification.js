import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import moment from "moment";
import { Column as Col, Row } from "react-native-flexbox-grid";

const Notification = () => {
  const redirect = (routeName) => {
    const { navigate } = this.props.navigation;
    navigate(routeName);
  };

  const shortify = (text) => {
    const length = 67;
    if (text.length > length) {
      text = `${text.substring(0, length)}`;
      text = `${text.trim()}...`;
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          marginTop: 35,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#2ecc71",
          }}
        >
          Notification
        </Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Row key="ystfh48r">
            <Col sm={12} md={6} lg={6}>
              <TouchableOpacity style={styles.list}>
                <Row size={12}>
                  <Col sm={2}>
                    <Image
                      source={require("../images/avatar.png")}
                      style={{ width: 60, height: 60, borderRadius: 30 }}
                    />
                  </Col>
                  <Col sm={10}>
                    <Text style={styles.title}>
                      John Doe approved your interest on Samsung TV
                    </Text>
                    <Text style={styles.textStyle}>
                      {moment().format("MMM D, YYYY @ h:mm A")}
                    </Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  list: {
    backgroundColor: "#fff",
    padding: 7,
    borderTopColor: "transparent",
    borderBottomColor: "#ccc",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: 10,
  },
  textStyle: {
    color: "#555",
    marginTop: 3,
    marginLeft: 10,
    fontSize: 12,
  },
});

export default Notification;
