import React from 'react'
import { TextInput, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

const Input = (props) => {
  return (
    <TextInput style={tw`rounded-${props.rounded_border} h-${props.height}  border-${props.border}`} placeholder={props.placeholder}
    >
    </TextInput>
  )
}

export default Input
