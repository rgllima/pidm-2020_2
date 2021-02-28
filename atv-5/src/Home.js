import React, {useEffect, useState} from 'react'
import { View, Button, StyleSheet, ScrollView} from "react-native";
import AlbumCard from "./AlbumCard";

export const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    height: "100%",
    padding: 10,
  }
});

const Home = ({ navigation }) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json")
      .then(async res => setAlbums((await res.json()).albums))
  }, [])

  const buildAlbums = () => albums.map(album => (
    <AlbumCard navigation={navigation} album={album} key={album.id}/>
  ))

  return (
    <ScrollView style={styles.wrap}>
      {buildAlbums()}
    </ScrollView>
  )
}

export default Home
