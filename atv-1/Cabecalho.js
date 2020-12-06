import React  from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
  }
});

const Cabecalho = ({ nome, curso }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.subtitle}>{curso}</Text>
    </View>
  )
}

export default Cabecalho
