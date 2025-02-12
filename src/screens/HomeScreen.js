import React from "react"
import { Text, View, Button, TouchableOpacity } from "react-native"
import BasicButton from "../components/BasicButton"
import { screenStyles } from "../styles/styles"

const { screenTextStyle, TOButton } = screenStyles

const HomeScreen = () => {
  return <View>
    <Text style={screenTextStyle}>Socai Home Screen!</Text>
    <BasicButton color='#e31cad'/>
    <TouchableOpacity 
      style={TOButton}
      onPress={() => {
        console.log('Go to List Demo')
      }}
    >
      <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
        GO TO LIST DEMO
      </Text>
    </TouchableOpacity>
  </View>
};

export { HomeScreen }
