import { View, Text, FlatList } from 'react-native'
import React from 'react'
import listData from '../data/listData'
import { screenStyles } from '../styles/styles'

const { screenTextStyle, listTextStyle, listViewStyle } = screenStyles

const ListScreen = () => {
  return (
    <View style={{paddingBottom: 100,}}>
      <Text style={screenTextStyle}>List Screen</Text>
      <FlatList 
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true} // lets scroll this bad boy
        data={listData}
        renderItem={({item, index}) => {
          //  destructure off the item property from parent named element
          //  element === { item: {name: 'name' }, index: number - 1 }
          return (
            <View style={listViewStyle} key={index}>
              <Text style={listTextStyle}>{index + 1}: {item.name}</Text>
              <Text>Age:  {item.age}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export { ListScreen }