import React from 'react'
import { Text, View } from 'react-native'
import Input from '../components/basic/Input'
import UIButton from '../components/basic/UIButton'
import tw from '../utils/config/tailwindConf'

const Test = () => {
  return (
    <View style={tw`flex flex-col w-full items-center	justify-center`}>
      <Text style={tw`text-center font-bold text-xl p-5`}>this is an example:</Text>
      <UIButton
        padding="5"
        width="4/5"
        color="secondary"
        text="hello sads"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
      />
      <Input
        height="96"
        placeholder="text"
        border="2"
        rounded_border="lg"
      />

    </View>
  )
}

export default Test
