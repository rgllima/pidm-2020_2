import React  from 'react';
import { StyleSheet, Image, View} from "react-native";

const styles = StyleSheet.create({
  image: {
    height: 193,
    width: 110,
    margin: 30
  },
});

const Corpo = () => {
  let image = { uri: 'https://thispersondoesnotexist.com/image' }

  return (
    <View>
      <Image source={image} style={styles.image} />
    </View>
  )
}

export default Corpo
