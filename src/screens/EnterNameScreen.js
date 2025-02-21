import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'

import { screenStyles } from '../styles/styles'
const { screenTextStyle, TOButton, TOButtonText, textInputPink } = screenStyles

const EnterNameScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const onFocus = () => setIsFocused(true) 

  const handleCheckEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    regex.test(email) ? console.log('Valid email address') 
      : console.log('Invalid email address') 
  }


  return (
    <View>
      <Text style={screenTextStyle}>Login Screen</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={textInputPink} 
        onChangeText={(email) => setEmail(email)} 
        placeholder='Email'
        value={email}
      />
      {checkValidEmail ? <Text>Wrong format email</Text> : null }
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={textInputPink} 
        onChangeText={(value) => {
          setPassword(value)
        }} 
        placeholder='Password'
        value={password}
        onFocus={onFocus}
        secureTextEntry={seePassword}
      />
      { isFocused && password.length < 8 && password.length > 0 ? 
        <View>
          <Text>Passworld must be a minimum of 8 characters</Text> 
        </View>
        : null
      }
      <TouchableOpacity style={TOButton} onPress={()=>{console.log('Login')}}>
        <Text style={TOButtonText}> Login </Text>
      </TouchableOpacity>
    </View>
  )
}

export { EnterNameScreen }