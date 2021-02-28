import React, { useEffect, useState } from 'react'
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

const AlbumView = ({ navigation, route }) => {
  const { album } = route.params
  navigation.setOptions({ title: `.:${album.name}:.` })

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/san650/ten/master/apps/music" + album.links.tracks)
      .then(async res => setTracks((await res.json()).tracks))
  }, [album])

  const buildTracks = () => tracks.map((track, key) => (
    <Text key={track.id}>{key} - ({track.duration}) {track.title}</Text>
  ))

  return (
    <View style={styles.wrap}>
      {buildTracks()}

      <View style={styles.actions}>
        <Button
          title="Voltar"
          onPress={() => navigation.pop()}
        />
      </View>
    </View>
  )
}

export default AlbumView
