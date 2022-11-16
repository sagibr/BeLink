import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'

const SenderMessage = ({message}) => {
  return (
    <View style={[tw`pt-4 bg-purple-600 rounded-tr-none px-5 py-3 mx-3 my-2`, {alignSelf: "flex-start", marginLeft:"auto"}]}>
      <Text style={tw`text-white`}>{message.text}</Text>
    </View>
  )
}

export default SenderMessage