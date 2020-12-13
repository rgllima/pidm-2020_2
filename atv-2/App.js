import React from 'react';
import { StyleSheet, View } from 'react-native';
import Election from "./src/Election";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});


export default function App() {
  return (
    <View style={styles.container}>
      <Election/>
    </View>
  );
}
