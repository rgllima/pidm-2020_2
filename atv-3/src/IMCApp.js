import React, {useEffect, useState} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
import IMCCalc from "./IMCCalc";

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
});


const IMCApp = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setShowResult(false);
  }, [weight, height]);

  const handleSubmit = () => {
    if (weight > 0 && height > 0) {
      setShowResult(true);
    }
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        Insira os Dados para Calcular seu IMC
      </Text>

      <TextInput
        value={weight}
        placeholder="Insira seu Peso (Kg)"
        onChangeText={(val) => setWeight(parseFloat(val))}
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <TextInput
        value={height}
        placeholder="Insira sua Altura (metros)"
        onChangeText={(val) => setHeight(parseFloat(val))}
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <Button
        title="Calcular"
        onPress={handleSubmit}
      />

      { showResult ? <IMCCalc height={height} weight={weight}/> : null }
    </View>
  )
}

export default IMCApp
