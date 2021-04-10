import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import Colors from "../../constants/colors";
import BodyText from "../../components/BodyText";
import TitleText from "../../components/TitleText";
import MainButton from "../../components/MainButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is just over....</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../../assets/success.png")}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}> {roundsNumber}</Text>{" "}
          rounds to guess number
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
        <MainButton onPress={onRestart}>Restart Game</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
