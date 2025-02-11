import { View, Text, FlatList } from 'react-native'
import React from 'react'
import listData from '../data/listData'
import { screenStyles } from '../styles/styles'

const { screenTextStyle } = screenStyles

const ListScreen = () => {
  return (
    <View>
      <Text style={screenTextStyle}>List Screen</Text>
      <FlatList 
        scrollEnabled={true} // lets scroll this bad boy
        data={listData}
        renderItem={({item, index}) => {
          //  destructure off the item property from parent element
          //  element === { item: {name: 'name' }, index: number - 1 }
          return <Text key={index}>{index + 1}: {item.name}</Text>
        }}
      />
    </View>
  )
}

export { ListScreen }