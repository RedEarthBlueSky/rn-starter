import React from "react"
import { Text, View, TouchableOpacity, FlatList } from "react-native"
import TOButtonType from "../components/TOButtonType"

import { homeListData } from "../data/listData"
import { screenStyles } from "../styles/styles"
const { screenTextStyle, TOButton, TOButtonText } = screenStyles

//  props is being passed down from App.js - I would guess
const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={screenTextStyle}>Socai Home Screen!</Text>
    <FlatList 
      showsVerticalScrollIndicator={false}
      scrollEnabled
      data={homeListData}
      renderItem={({item, index}) => {
        const { navigate } = navigation
        return <View key={index}> 
            <TOButtonType 
              navigate={navigate}
              target={item.target}
              title={item.TITLE}
            />
          </View>
      }}
    />
  </View>
};

export { HomeScreen }
