import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from "react-native";
import IMCMsg from "./IMCMsg";

export const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
});

const IMCCalc = ({ weight, height }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(weight / (height * height))
  }, [weight, height])

  return (
    <View>
      <Text style={styles.text}>Seu IMC é {parseFloat(value.toFixed(2))}</Text>
      <IMCMsg value={value} />
    </View>
  )
}

export default IMCCalc
