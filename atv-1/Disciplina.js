import React  from 'react';
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
  }
});

const Disciplina = ({ titulo }) => {
  return (
    <View>
      <Text style={styles.title} >{titulo}</Text>
    </View>
  )
}

export default Disciplina

