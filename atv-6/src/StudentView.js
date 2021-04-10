import React from 'react'
import { View, Button, StyleSheet, Text } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    padding: 20
  },
  actions: {
    width: "100%",
    marginTop: 25,
    padding: 5,
  },
});

const StudentView = ({ navigation, route }) => {
  const { student } = route.params

  return (
    <View style={styles.wrap}>
      <Text>ID: {student.id}</Text>
      <Text>NOME: {student.nome}</Text>
      <Text>IDADE: {student.idade} anos</Text>
      <Text>CURSO: {student.curso}</Text>

      <View style={styles.actions}>
        <Button title="Voltar" onPress={() => navigation.pop()}/>
      </View>
    </View>
  )
}

export default StudentView
