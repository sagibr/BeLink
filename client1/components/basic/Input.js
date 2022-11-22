import React from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

const Input = (props) => {
  return (
    <View style={tw`m-5`}>
      <Text style={tw`text-xl font-extrabold tracking-tight margin:0px text-black`}>
        {props.placeholder}
      </Text>
      <TextInput
        style={[
          tw`rounded-${props.rounded_border} h-${props.height}  border-${props.border} border-gray-500 `,
        ]}
        onChangeText={(newText) => {
          props.setData(newText)
          console.log('Input data: ' + newText)
        }}
        keyboardType={props.type}
      ></TextInput>
    </View>
  )
}

export default Input
