import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://plantbasedking-ad432-default-rtdb.firebaseio.com/message.json"
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.title}></Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
});
