import React, { Component } from "react";
import ReactNative, {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Column as Col, Row } from "react-native-flexbox-grid";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Settings",
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#0C4C78" },
    headerLeft: null,
  };

  redirect = (routeName) => {
    const { navigate } = this.props.navigation;
    navigate(routeName);
  };

  render = () => (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          marginTop: 35,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        <Row>
          <Col sm={9}>
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Profile
            </Text>
          </Col>
          <Col sm={3}>
            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginRight: 10 }}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </View>

      <ScrollView>
        <View style={{ marginTop: 10, alignItems: "center", padding: 20 }}>
          <Image
            source={require("../images/avatar.png")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", margin: 10 }}>
            John The Baptist
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#ccc",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Row size={12}>
            <Col sm={4}>
              <TouchableOpacity style={{ padding: 10 }}>
                <Ionicons
                  style={{ textAlign: "center" }}
                  name="ios-eye"
                  size={30}
                  color="#000"
                />
                <Text style={{ padding: 5, textAlign: "center" }}>
                  20 Interests
                </Text>
              </TouchableOpacity>
            </Col>
            <Col sm={4}>
              <TouchableOpacity style={{ padding: 10 }}>
                <Ionicons
                  style={{ textAlign: "center" }}
                  name="ios-list-box"
                  size={30}
                  color="#02395E"
                />

                <Text style={{ padding: 5, textAlign: "center" }}>
                  37 Items
                </Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
