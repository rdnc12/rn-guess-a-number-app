import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    padding: 36,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    // borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    // borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "transparent",
  },
  headerTitle: {
    color: Platform.OS === "ios" ? "black" : "white",
  },
});

export default Header;
