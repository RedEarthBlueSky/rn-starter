import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({title, imageSource, imageScore}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSource}/>
      <Text>Image Score - {imageScore}</Text>
    </View>
  )
}

export default ImageDetail