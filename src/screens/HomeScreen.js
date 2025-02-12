import React from "react"
import { Text, View, Button, TouchableOpacity } from "react-native"
import BasicButton from "../components/BasicButton"
import { screenStyles } from "../styles/styles"

const { screenTextStyle, TOButton, TOButtonText } = screenStyles

//  props is being passed down from App.js - I would guess
const HomeScreen = ({navigation}) => {
  const { navigate } = navigation
  return <View>
    <Text style={screenTextStyle}>Socai Home Screen!</Text>
    <BasicButton navigate={navigate}/>
    <TouchableOpacity 
      style={TOButton}
      onPress={() => {
        navigate('List')
      }}
    >
      <Text style={TOButtonText}>
        GO TO LIST DEMO
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={TOButton}
      onPress={() => {
        navigate('Image')
      }}
    >
      <Text style={TOButtonText}>
        GO TO IMAGE SCREEN
      </Text>
    </TouchableOpacity>
  </View>
};

export { HomeScreen }
