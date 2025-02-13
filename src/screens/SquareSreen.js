import { View, Text } from 'react-native'
import React from 'react'

import { screenStyles } from '../styles/styles'
const { screenTextStyle } = screenStyles

const SquareSreen = () => {
  return (
    <View>
      <Text style={screenTextStyle}>Square Sreen</Text>
    </View>
  )
}

export { SquareSreen }