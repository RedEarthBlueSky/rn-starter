import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenStyles } from '../styles/styles'
const { SSTOButton, TOButtonText, ccTextStyle } = screenStyles

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return <View>
      <Text style={ccTextStyle}>{color}</Text>
        <TouchableOpacity style={SSTOButton} onPress={()=>{onIncrease()}}>
          <Text style={TOButtonText}> Increase {color} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={SSTOButton} onPress={()=>{onDecrease()}}>
          <Text style={TOButtonText}>Decrease {color}</Text>
        </TouchableOpacity>
    </View>
}

export default ColorCounter