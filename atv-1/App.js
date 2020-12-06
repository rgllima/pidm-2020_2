import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Cabecalho from "./Cabecalho";
import Corpo from "./Corpo";
import Disciplina from "./Disciplina";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});


export default function App() {
  return (
    <View style={styles.container}>

      <Cabecalho nome="Francisco José" curso="Engenharia de Software" />

      <Corpo />

      <Text style={styles.title}>Disciplinas</Text>

      <Disciplina titulo="Projeto de Interface de Dispositivos Móveis" />
      <Disciplina titulo="Projeto Detalhado de Software" />
      <Disciplina titulo="Projeto Integrado" />
    </View>
  );
}
