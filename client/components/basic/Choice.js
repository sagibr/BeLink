import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'

const Choice = (props) => {
    const color = props.type == "like" ? "green-500" : "red-500"
    return (
    <View style={tw` border-4 rounded-md bg-black bg-opacity-20 border-${color} `}>
      <Text style={tw`text-3xl font-bold uppercase tracking-wider text-${color}`}>{props.type}</Text>
    </View>
  )
}

export default Choice