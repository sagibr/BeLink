import { View, Text } from 'react-native'
import React from 'react'
import CheckBox from 'expo-checkbox'
import tw from '../../utils/config/tailwindConf'


const SelectBarQuizRow = () => {
  return (
    <View style={tw`w-full h-1/3 rounded-xl border-2 flex-row justify-between content-center px-5`}>
        <Text>Men</Text>
        
        <CheckBox style={tw`rounded-full`}/>
    </View>
  )
}

export default SelectBarQuizRow