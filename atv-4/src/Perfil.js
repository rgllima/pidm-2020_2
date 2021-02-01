import React from 'react'
import { View, Button, StyleSheet, Text, Image } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  row: {
    display: "flex",
    flexDirection: 'row'
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    flex: 1
  },
  value: {
    fontSize: 20,
    flex: 3
  },
  input: {
    fontSize: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    height: 56,
    padding: 10
  },
  centerImage: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 193,
    width: 110,
    margin: 30
  }
});

const Perfil = ({ route, navigation }) => {
  const { name, age, email } = route.params
  let image = { uri: 'https://thispersondoesnotexist.com/image' }

  return (
    <View style={styles.wrap}>

      <Text style={styles.text}>PERFIL</Text>

      <View style={styles.centerImage}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>NOME:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>IDADE:</Text>
        <Text style={styles.value}>{age}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>E-MAIL:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Perfil
