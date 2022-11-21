import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from '../../utils/config/tailwindConf'

const InputTime = ({ tech, setData, data }) => {
  const [input, setInput] = useState('')
  console.log(input)
  return (
    <View style={tw`w-full h-1/3 flex-row`}>
      <View>
        <Text style={tw`flex-1`}>{tech}</Text>
      </View>
      <View style={tw`flex-2`}>
        <TextInput
          keyboardType="number-pad"
          onChangeText={(text) => {
            setData({ tech: tech, time: text })
          }}
        />
      </View>
    </View>
  )
}

export default InputTime
