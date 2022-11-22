import React from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

const PasswordInput = (props) => {
  return (
    <View style={tw`m-5`}>
      <Text style={tw`text-2xl font-extrabold tracking-tight margin:0px text-black`}>
        {props.placeholder}:
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
        secureTextEntry={true}
      ></TextInput>
    </View>
  )
}

export default PasswordInput
