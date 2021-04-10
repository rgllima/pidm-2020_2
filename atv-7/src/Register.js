import React, {useCallback, useState} from 'react'
import { View, Button, StyleSheet, Text, TextInput } from "react-native";

import firebase from "./firebase-config";

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

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const submit = useCallback(() => {
    setLoading(true)
    const db = firebase.firestore().collection("alunos")
    const id = db.doc().id

    db.doc(id).set({id, nome: name, idade: parseInt(age), curso: course}).then(() => {
      setLoading(false);
      navigation.pop()
    })
  }, [name, age, course])

  return (
    <View style={styles.wrap}>

      <Text style={styles.text}>CADASTRAR ESTUDANTE</Text>

      <TextInput
        value={name}
        placeholder="Nome"
        onChangeText={(val) => setName(val)}
        style={styles.input}
      />

      <TextInput
        value={age}
        placeholder="Idade"
        onChangeText={(val) => setAge(val)}
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <TextInput
        value={course}
        placeholder="Curso"
        onChangeText={(val) => setCourse(val)}
        style={styles.input}
      />

      <Button
        title={loading ? 'Aguarde...': 'Salvar'}
        onPress={submit}
      />

    </View>
  )
}

export default Register
