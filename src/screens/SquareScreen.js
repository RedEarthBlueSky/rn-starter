import { View, Text } from 'react-native'
import React, {useReducer} from 'react'
import ColorCounter from '../components/ColorCounter'
import { screenStyles } from '../styles/styles'
import { squareScreenReducer } from '../reducers/reducers'

const { screenTextStyle, colorBoxWrapper } = screenStyles
const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [state, dispatch] = useReducer(squareScreenReducer, {red: 0, green: 0, blue: 0})
  console.log('red:', state.red, 'green:', state.green, 'blue:', state.blue)
  return (
    <View>
      <Text style={screenTextStyle}>Square Screen</Text>
      <ColorCounter color='Red'
        onIncrease={() => {dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}}
        onDecrease={() => {dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}}
      />
      <ColorCounter color='Green'
        onIncrease={() => {dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}}
        onDecrease={() => {dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}}
      />
      <ColorCounter color='Blue'
        onIncrease={() => {dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}}
        onDecrease={() => {dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}}
      />
      <View 
        style={[colorBoxWrapper, {backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}]}
      />
    </View>
  )
}

export { SquareScreen }