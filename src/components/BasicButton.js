import { View, Text, Button } from 'react-native'
import React from 'react'
import { screenStyles } from "../styles/styles"

const { buttonWrapper } = screenStyles

const BasicButton = ({color}) => {
  return (
    <View>
        <View style={buttonWrapper}>
          <Button 
            color={color}
            disabled={false}
            title='Go to Components Demo' 
            onPress={() => {
              console.log('Components Demo button pressed!')
            }}  
            accessibilityLabel="press to go to Components Demo Screen"
          />
      </View>
    </View>
  )
}

export default BasicButton