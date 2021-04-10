import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleText = ({ children, style }) => (
  <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;

/// {{ ...styles.title, ...style }} ===> we can combine other styles