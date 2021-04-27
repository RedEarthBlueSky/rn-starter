import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const greeting = 'Default font size is 14'
  const greet = <Text style={styles.h3}>Hi again</Text>
  return (
    <View>
      <Text style={styles.h1}>h1 Components Screen</Text>
      <Text style={styles.h2}>h2 Components Screen</Text>
      <Text style={styles.h3}>h3 Components Screen</Text>
    <Text style={styles.basefont}>This is... {greeting}</Text>
  {greet}
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  basefont: {
    fontSize: 18,
    fontWeight: 'normal',
  },
})

export default ComponentsScreen
