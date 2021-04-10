import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView} from "react-native";
import Card from "./Card";

import firebase from "./firebase-config";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    padding: 10,
  }
});

const Home = ({ navigation }) => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    firebase.firestore()
      .collection('alunos')
      .get()
      .then((res) => {
        setStudents(res.docs.map(doc => doc.data()))
      })
  }, [])

  const buildCards = () => students.map(student => (
    <Card navigation={navigation} student={student} key={student.id}/>
  ))

  return (
    <ScrollView style={styles.wrap}>
      {buildCards()}
    </ScrollView>
  )
}

export default Home
