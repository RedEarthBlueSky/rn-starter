import { View, Text, Button, FlatList } from 'react-native'
import React, {useState} from 'react'
import { format as prettyFormat} from 'pretty-format'
import { screenStyles } from '../styles/styles'
const { screenTextStyle, buttonWrapper, colorWrapper } = screenStyles

const AddColorScreen = (props) => {
  // console.log(prettyFormat(props))
  const [color, setColor] = useState([])
  return (
    <View>
       <Text style={screenTextStyle}>Add Color Demo</Text>
          <View style={buttonWrapper}>
            <Button 
              color='#e31cad'
              disabled={false}
              title='ADD A COLOR' 
              onPress={() => {
                //  here we are creating an array of colors generated
                //  but we can also use setColor(randomRGB())
                //  and have color value initially and empty string
                setColor([...color, randomRGB()])
                console.log(prettyFormat(color))
              }}  
              accessibilityLabel="Add Color"
            />
        </View>
        <View style={buttonWrapper}>
            <Button 
              color='#e31cad'
              disabled={false}
              title='CLEAR COLOR ARRAY' 
              onPress={() => {
                setColor([])
                console.log(prettyFormat(color))
              }}  
              accessibilityLabel="Add Color"
            />
        </View>
        <View style={[colorWrapper, {backgroundColor: color[color.length - 1]}]}>
        </View>
    </View>
  )
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red},${green},${blue} )`
}

export {AddColorScreen}