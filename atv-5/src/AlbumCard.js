import React from 'react'
import { View, Button, StyleSheet, Text, Image } from "react-native";

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
    borderBottomWidth: 1,
    borderBottomColor: "#0000001c",
    width: "100%"
  },
  separator: {
    marginVertical: 5,
  },
  headerImage: {
    height: 50,
    width: 50,
    marginRight: 5
  },
  headerArtist: {
    fontWeight: "bold"
  },
  image: {
    height: 200,
    width: 200,
  },
  actions: {
    width: "100%",
    padding: 5,
  },
});

const Separator = () => (
  <View style={styles.separator} />
);

const AlbumCard = ({ navigation, album }) => {
  let image = { uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + album.image}

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Image source={image} style={styles.headerImage} />

        <View>
          <Text style={styles.headerArtist}>{album.artist}</Text>
          <Text>{album.name}</Text>
        </View>
      </View>

      <Image source={image} style={styles.image} />

      <View style={styles.actions}>
        <Button
          title="Ver Músicas"
          onPress={() => navigation.navigate('AlbumView', { album })}
        />
        <Separator/>
        <Button
          title="Me Compre"
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  )
}

export default AlbumCard
