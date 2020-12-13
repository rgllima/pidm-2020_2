import React, {useEffect, useState} from 'react';
import { Text, View, Button } from "react-native";

import { styles } from './Styles'

const CITIES = [
  {
    name: 'Quixadá',
    votes: 0
  },
  {
    name: 'Fortaleza',
    votes: 0
  },
  {
    name: 'Limoeiro',
    votes: 0
  },
  {
    name: 'Juazeiro',
    votes: 0
  }
]

const Election = () => {
  const [cities, setCities] = useState([...CITIES])
  const [mostVoted, setMostVoted] = useState([])
  const [leastVoted, setLeastVoted] = useState([])

  const vote = (city, index) => {
    const copyCities = [...cities]
    copyCities[index].votes += 1
    setCities(copyCities)
  }

  const button = (city, k) => (
    <Button
      title={city.name}
      onPress={() => vote(city, k)}
      key={k}
    />
  )

  const showResults = () => cities.map((city, k) => (
    <Text key={k}>{city.name}: {city.votes}</Text>
  ))

  const buildCityButtons = () => cities.map((city, k) => button(city, k))

  const showMostVoted = () => mostVoted.map((city, k) => (
    <Text key={k}>{city.name}: {city.votes}</Text>
  ))

  const showLeastVoted = () => leastVoted.map((city, k) => (
    <Text key={k}>{city.name}: {city.votes}</Text>
  ))

  useEffect(() => {
    const copyCities = [...cities]
    copyCities.sort((a, b) => a.votes - b.votes)

    const mostVtd = copyCities.filter(city => city.votes === copyCities[copyCities.length-1].votes)
    const leastVtd = copyCities.filter(city => city.votes === copyCities[0].votes)

    setMostVoted(mostVtd)
    setLeastVoted(leastVtd)
  }, [cities])

  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>Cidades Mais Votadas</Text>
        {showMostVoted()}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Cidades Menos Votadas</Text>
        {showLeastVoted()}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Votos por Cidade</Text>
        {showResults()}
      </View>

      <View style={styles.wrap}>
        <Text style={styles.title}>Vote</Text>
        {buildCityButtons()}
      </View>
    </View>
  )
}

export default Election
