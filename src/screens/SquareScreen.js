import { View, Text } from 'react-native'
import React from 'react'
import ColorCounter from '../components/ColorCounter'
import { screenStyles } from '../styles/styles'
const { screenTextStyle } = screenStyles

const SquareScreen = () => {
  return (
    <View>
      <Text style={screenTextStyle}>Square Screen</Text>
      <ColorCounter 
        color='Red'
      />
      <ColorCounter 
        color='Blue'
      />
      <ColorCounter 
        color='Green'
      />
    </View>
  )
}

export { SquareScreen }