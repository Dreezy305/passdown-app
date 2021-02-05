import React from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Column as Col, Row } from "react-native-flexbox-grid";
import moment from "moment";
import GlobalStyle from "../components/Styles";

let show, hide;

class Gift extends React.Component {
  state = {
    language: "",
    mood: "How do you feel?",
    value: "How do you feel?",
    date: moment(),
    bg: "#fff",
    loadingText: "Loading...",
    animate: "flex",
    isFocused: true,
  };

  focus = () => {
    this.input.focus();
  };

  togglePreloader() {
    show = setTimeout(() => {
      clearTimeout(show);
      this.setState({ animate: "flex", loadingText: "Saving..." });
    }, 2000);

    hide = setTimeout(() => {
      clearTimeout(hide);
      this.setState({ animate: "none" });
    }, 3000);

    return { show, hide };
  }

  componentDidMount() {}

  render() {
    const countries = [
      { value: "Nigeria", label: "Nigeria" },
      { value: "Ghana", label: "Kenya" },
    ];

    var data = [["Nigeria", "Kenya", "Ghana"]];

    return (
      <KeyboardAvoidingView
        style={GlobalStyle.container}
        behavior="padding"
        enabled
      >
        <StatusBar barStyle="dark-content" />
        <View style={GlobalStyle.topBar}>
          <Row>
            <Col sm={10}>
              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: "#2ecc71",
                  fontWeight: "bold",
                }}
              >
                Lagos, Nigeria
              </Text>
            </Col>
            <Col sm={2}>
              <Ionicons name="search-circle" size={40} color="#444" />
            </Col>
          </Row>
        </View>

        <ScrollView style={GlobalStyle.container}>
          <View style={[GlobalStyle.cardContainer, { display: "none" }]}>
            <ActivityIndicator color={"blue"} size={"large"} />
          </View>
          <View style={GlobalStyle.cardContainer}>
            <Row>
              <Col sm={12}>
                <TouchableOpacity style={GlobalStyle.card}>
                  <Image
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1553260234-9450a4ff098d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    }}
                    style={GlobalStyle.cardImage}
                  />
                  <View style={GlobalStyle.cardMeta}>
                    <Text style={GlobalStyle.cardTitle}>
                      Convenience method to create a custom font based
                    </Text>
                    <Row>
                      <Col sm={6}>
                        <Text style={{ color: "#666", fontSize: 13 }}>
                          Clothings
                        </Text>
                      </Col>

                      <Col sm={6}>
                        <Text
                          style={{
                            textAlign: "right",
                            color: "#333",
                            fontSize: 13,
                          }}
                        >
                          293 Interests
                        </Text>
                      </Col>
                    </Row>
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>

          <View style={GlobalStyle.cardContainer}>
            <Row>
              <Col sm={12}>
                <TouchableOpacity style={GlobalStyle.card}>
                  <Image
                    source={{
                      uri:
                        "https://images.unsplash.com/photo-1553260234-9450a4ff098d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    }}
                    style={GlobalStyle.cardImage}
                  />
                  <View style={GlobalStyle.cardMeta}>
                    <Text style={GlobalStyle.cardTitle}>
                      Convenience method to create a custom font based
                    </Text>
                    <Row>
                      <Col sm={6}>
                        <Text style={{ color: "#666", fontSize: 13 }}>
                          Clothings
                        </Text>
                      </Col>

                      <Col sm={6}>
                        <Text
                          style={{
                            textAlign: "right",
                            color: "#333",
                            fontSize: 13,
                          }}
                        >
                          293 Interests
                        </Text>
                      </Col>
                    </Row>
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Gift;
