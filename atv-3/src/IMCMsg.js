import React from 'react'
import { Text, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  normalWeight: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "blue"
  },
  otherWeight: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "red"
  },
});

const IMCMsg = ({ value }) => {
  function imcMessage() {
    if (value < 17) return "Muito abaixo do peso"
    else if (value >= 17 && value < 18.5) return "Abaixo do peso"
    else if (value >= 18.5 && value < 25) return "Peso normal"
    else if (value >= 25 && value < 30) return "Acima do peso"
    else if (value >= 30 && value < 35) return "Obesidade I"
    else if (value >= 35 && value < 40) return "Obesidade II (severa)"
    return "Obesidade II (mórbida)"
  }

  return (
    <Text style={(value >= 18.5 && value < 25 ) ? styles.normalWeight : styles.otherWeight}>
      {imcMessage()}
    </Text>
  )
}

export default IMCMsg
