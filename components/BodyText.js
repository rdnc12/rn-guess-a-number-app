import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BodyText = ({ children }) => <Text style={styles.body}>{children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
});

export default BodyText;
