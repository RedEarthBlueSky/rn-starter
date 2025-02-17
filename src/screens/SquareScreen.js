import { View, Text, FlatList } from 'react-native'
import React, {useState} from 'react'
import ColorCounter from '../components/ColorCounter'
import { screenStyles } from '../styles/styles'
const { screenTextStyle, colorBoxWrapper } = screenStyles
const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case 'red' :
        (red + change > 255 || red + change < 0) ? null : setRed(red + change)
      case 'blue' :
        (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change)
      case 'green' :
        (green + change > 255 || green + change < 0) ? null : setGreen(green + change)
      return
    }
  }
  console.log('red:', red, 'green:', green, 'blue:', blue)
  return (
    <View>
      <Text style={screenTextStyle}>Square Screen</Text>
      <ColorCounter 
        color='Red'
        onIncrease={() => {setColor('red', COLOR_INCREMENT)}}
        onDecrease={() => {setColor('red', COLOR_INCREMENT * -1)}}
      />
      <ColorCounter 
        color='Blue'
        onIncrease={() => {setColor('blue', COLOR_INCREMENT)}}
        onDecrease={() => {setColor('blue', COLOR_INCREMENT * -1)}}
      />
      <ColorCounter 
        color='Green'
        onIncrease={() => {setColor('green', COLOR_INCREMENT)}}
        onDecrease={() => {setColor('green', COLOR_INCREMENT * -1)}}
      />
      <View 
        style={[colorBoxWrapper, {backgroundColor: `rgb(${red}, ${green}, ${blue})`}]}
      />
    </View>
  )
}

export { SquareScreen }