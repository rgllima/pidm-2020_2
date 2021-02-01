import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button} from "react-native";
import IMCMsg from "./IMCMsg";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
});

const Resultado = ({ route, navigation }) => {
  const [value, setValue] = useState(0);

  const { height, weight } = route.params

  useEffect(() => {
    setValue(weight / (height * height))
  }, [weight, height])

  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.text}>Seu IMC é {parseFloat(value.toFixed(2))}</Text>
        <IMCMsg value={value} />
      </View>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Resultado
