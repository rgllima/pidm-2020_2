import React from 'react'
import { View, Button, StyleSheet, Text } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0000001c",
    marginBottom: 5
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    marginBottom: 10,
    width: "100%"
  },
  separator: {
    marginVertical: 5,
  },
  headerArtist: {
    fontWeight: "bold"
  },
  actions: {
    width: "100%",
    padding: 5,
  },
});

const Card = ({ navigation, student }) => {

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>

        <View>
          <Text style={styles.headerArtist}>Nome: {student.nome}</Text>
          <Text>Curso: {student.curso}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          title="Ver Informações"
          onPress={() => navigation.navigate('StudentView', { student })}
        />
      </View>
    </View>
  )
}

export default Card
