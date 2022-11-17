import React from 'react'
import { TextInput, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

const Input = (props) => {
  return (
    <TextInput
      style={tw`	margin: 0px rounded-${props.rounded_border} h-${props.height}  border-${props.border}`}
      placeholder={props.placeholder}
      onChangeText={(newText) => {
        props.setData(newText)
        console.log('Input data: ' + newText)
      }}
      keyboardType={props.type}
    ></TextInput>
  )
}

export default Input
