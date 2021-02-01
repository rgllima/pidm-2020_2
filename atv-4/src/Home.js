import React from 'react'
import { View, Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  separator: {
    marginVertical: 25,
  },
});

const Separator = () => (
  <View style={styles.separator} />
);


const Home = ({ navigation }) => {

  return (
    <View style={styles.wrap}>

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Separator/>

      <Button
        title="IMC"
        onPress={() => navigation.navigate('IMC')}
      />
      <Separator/>

      <Button
        title="Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />

    </View>
  )
}

export default Home
