import { View, Text, Button } from 'react-native'
import React from 'react'
import { screenStyles } from "../styles/styles"

const { buttonWrapper } = screenStyles

const BasicButton = ({navigate}) => {
  return (
    <View>
        <View style={buttonWrapper}>
          <Button 
            color='#e31cad'
            disabled={false}
            title='Go to Components Demo' 
            onPress={() => {
              navigate('Components')
            }}  
            accessibilityLabel="press to go to Components Demo Screen"
          />
      </View>
    </View>
  )
}

export default BasicButton