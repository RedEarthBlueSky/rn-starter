import { View, Text, Button, FlatList } from 'react-native'
import React, {useState} from 'react'
import { format as prettyFormat} from 'pretty-format'
import { screenStyles } from '../styles/styles'
const { screenTextStyle, buttonWrapper, colorWrapper } = screenStyles

const AddColorScreen = (props) => {
  // console.log(prettyFormat(props))
  const [colorStr, setColorStr] = useState('')
  const [colorArr, setColorArr] = useState([])
  return (
    <View>
       <Text style={screenTextStyle}>Add Color Demo</Text>
          <View style={buttonWrapper}>
            <Button 
              color='#e31cad'
              disabled={false}
              title='ADD A COLOR' 
              onPress={() => {
                setColorStr(randomRGB())
                console.log(prettyFormat(colorStr))
              }}  
              accessibilityLabel="Add Color"
            />
        </View>
        <View style={buttonWrapper}>
            <Button 
              color='#e31cad'
              disabled={false}
              title='CLEAR COLORS' 
              onPress={() => {
                setColorStr('')
                setColorArr([])
              }}  
              accessibilityLabel="Remove Color"
            />
        </View>
        { colorStr === '' ? null :
          <View style={[colorWrapper, {backgroundColor: colorStr}]} />
        }
        <Text style={screenTextStyle}>Create Color List</Text>
        <View style={buttonWrapper}>
            <Button 
              color='#e31cad'
              disabled={false}
              title='ADD COLOR TO LIST' 
              onPress={() => {
                setColorArr([...colorArr, randomRGB()])
                console.log(prettyFormat(colorArr))
              }}  
              accessibilityLabel="Add Color"
            />
        </View>
        <FlatList 
          data={colorArr}
          horizontal={false}
          keyExtractor={(item) => item}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={[colorWrapper, {backgroundColor: item}]}>
            </View>
            )
          }}
        />

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