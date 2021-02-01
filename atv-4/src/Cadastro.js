import React, {useState} from 'react'
import { View, Button, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

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

const Sobre = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const { navigate } = useNavigation();

  return (
    <View style={styles.wrap}>

      <Text style={styles.text}>CADASTRO</Text>

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
        value={email}
        placeholder="E-mail"
        onChangeText={(val) => setEmail(val)}
        style={styles.input}
      />

      <Button
        title="OK"
        onPress={() => navigation.navigate('Perfil', { name, age, email })}
      />

    </View>
  )
}

export default Sobre
