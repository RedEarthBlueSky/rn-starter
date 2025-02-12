import { View, Text } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'
import { screenStyles } from '../styles/styles'

const { screenTextStyle } = screenStyles

const ImageScreen = () => {
  return (
    <View>
      <Text style={screenTextStyle}>Image Screen</Text>
      <ImageDetail 
        title='Forest' 
        imageScore={9}
        imageSource={require('../../assets/images/beach.jpg')}
      />
      <ImageDetail 
        title='Sunset' 
        imageScore={7}
        imageSource={require('../../assets/images/forest.jpg')}
      />
      <ImageDetail 
        title='Mountain'
        imageScore={8}
        imageSource={require('../../assets/images/mountain.jpg')} 
      />
    </View>
  )
}

export { ImageScreen }