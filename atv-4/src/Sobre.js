import React from 'react'
import { View, Button, StyleSheet, Text } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30
  }
});

const Sobre = ({ navigation }) => {

  return (
    <View style={styles.wrap}>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Sobre
