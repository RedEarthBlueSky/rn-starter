import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'

import { screenStyles } from '../styles/styles'
const { H3, screenTextStyle, textBoxWrapper, TOButton, textInputPink } = screenStyles

const EnterNameScreen = () => {
  const [name, setName] = useState('')
  // console.log(name)
  return (
    <View>
      <Text style={screenTextStyle}>Enter Name Screen</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={textInputPink} 
        onChangeText={(value) => setName(value)} 
        placeholder='Enter name here...'
        value={name}
      />
      <View style={textBoxWrapper}>
        <Text style={H3}>{name}</Text>
      </View>
    </View>
  )
}

export { EnterNameScreen }