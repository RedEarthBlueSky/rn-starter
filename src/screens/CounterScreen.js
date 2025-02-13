import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import { screenStyles } from '../styles/styles'

const { buttonWrapper, screenTextStyle, counterWrapper } = screenStyles

const CounterScreen = ({navigation}) => {
  const [counter, setCounter] = useState(0)
  const {navigate} = navigation
  return (
    <View>
      <Text style={screenTextStyle}>Counter Demo</Text>
      <View style={buttonWrapper}>
        <Button 
          color='#e31cad'
          disabled={false}
          title='INCREASE' 
          onPress={() => {
            setCounter(counter + 1)
          }}  
          accessibilityLabel="increase amount"
        />
    </View>
    <View style={buttonWrapper}>
      <Button 
        color='#e31cad'
        disabled={false}
        title='DECREASE' 
        onPress={() => {
          setCounter(counter - 1)
        }}  
        accessibilityLabel="decrease amount"
      />
  </View>
  <View style={counterWrapper}>
    <Text style={screenTextStyle} >
      {counter}
    </Text>
  </View>
  <View style={buttonWrapper}>
      <Button 
        color='#e31cad'
        disabled={false}
        title='RESET' 
        onPress={() => {
          setCounter(0)
        }}  
        accessibilityLabel="reset amount"
      />
  </View>
    </View>
  )
}

export {CounterScreen}