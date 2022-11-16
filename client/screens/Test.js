import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import ChatRow from '../components/ChatClone/ChatRow'
import tw from '../utils/config/tailwindConf'
import ChatList from './chat/ChatList'
import Messaging from './chat/Messaging'
import ChatScreen from './ChatScreen'
const Test = () => {
  // const socket = io('http://localhost:5000')

  return (
    <View style={tw``}>
      {/* <ChatList/> */}
      {/* <Messaging/> */}
      {/* <AvatarChat/> */}
      {/* <ChatRow/> */}
      <ChatScreen/>
    </View>
  )
}

export default Test
