import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenStyles } from '../styles/styles'
const { TOButton, TOButtonText } = screenStyles

const TOButtonType = ({navigate, target, title }) => {
  // console.log(navigation)
  return (
    <View>
      <TouchableOpacity style={TOButton} onPress={()=>{navigate(target)}}>
        <Text style={TOButtonText}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TOButtonType