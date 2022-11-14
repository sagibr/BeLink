import React from 'react'
import { Text, View } from 'react-native'
import UIButton from '../components/basic/UIButton'
import tw from '../utils/config/tailwindConf'
import Chat from './chat/Chat'
import ChatList from './chat/ChatList'

const Test = () => {
  return (
    <View style={tw`flex flex-col w-full items-center	justify-center`}>
      {/* <Text style={tw`text-center font-bold text-xl p-5`}>this is an example:</Text> */}
      <ChatList/>
      {/* <UIButton
        padding="5"
        width="4/5"
        color="secondary"
        text="hello sads"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
      /> */}
    </View>
  )
}

export default Test
