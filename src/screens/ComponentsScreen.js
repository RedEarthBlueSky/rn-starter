import { View, Text } from 'react-native'
import React from 'react'
import { screenStyles } from '../styles/styles'

const { screenTextStyle } = screenStyles

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={screenTextStyle}>Getting started with React Native</Text>
      <Text>Hello World!</Text>
    </View>
  )
}

export  { ComponentsScreen }