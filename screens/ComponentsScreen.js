import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  return (
    <Text style={styles.text}>
      This is the Components Screen
  </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  }
})

export default ComponentsScreen
