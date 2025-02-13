import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({title, imageSource, imageScore}) => {
  return (
    <View style={{marginBottom: 15,}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
      <Image source={imageSource}/>
      <Text style={{fontWeight: 'bold'}}>Image Score - {imageScore}</Text>
    </View>
  )
}

export default ImageDetail