import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const FlatListScreen = () => {
  const friends = [
    { name: 'Friend#1' },
    { name: 'Friend#2' },
    { name: 'Friend#3' },
    { name: 'Friend#4' },
    { name: 'Friend#5' },
    { name: 'Friend#6' },
    { name: 'Friend#7' },
    { name: 'Friend#8' },
  ]
  return (
    <View>
      <Text style={styles.h3}>Flat List Primitive Screen </Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          //  element === { item: { name: 'Friend #1'}, index: 0 }
          return <Text style={styles.basefont}>{item.name}</Text>
        }}
      />
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

export default FlatListScreen
