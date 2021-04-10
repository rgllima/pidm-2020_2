import React, {useCallback} from 'react'
import { View, Button, StyleSheet, Text, Alert } from "react-native";

import firebase from "./firebase-config";

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

const Separator = () => (
  <View style={styles.separator} />
);

const Card = ({ navigation, student }) => {

  const deleteStudent = useCallback(() => {
    firebase.firestore().collection("alunos").doc(student.id).delete();
  }, [])

  const confirmAlert = () =>
    Alert.alert(
      "Confirmar a Exclusão",
      "Aluno: " + student.nome,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Apagar", onPress: () => deleteStudent() }
      ],
      { cancelable: false }
    );

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
          title="Editar"
          onPress={() => navigation.navigate('StudentView', { student })}
        />
        <Separator/>
        <Button
          title="Apagar"
          onPress={confirmAlert}
        />
      </View>
    </View>
  )
}

export default Card
