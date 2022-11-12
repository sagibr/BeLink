import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { io } from 'socket.io-client'

const Chat = () => {
  // const dispatch = useDispatch()
  // const userName = useSelectoer(userNameSelector)
  io.on("connection", (socket) => {
    socket.emit("hello", "world");
  });
  return (
    <View style={{height:"100%",width:"100%"}}>
      <View
        style={tw`bg-background p-2 flex-row self-end justify-between items-center w-100%`}
      >
        <TouchableHighlight onPress={''}>
          <FontAwesomeIcon icon={faArrowLeftLong} style={tw`text-white`} />
        </TouchableHighlight>
        <Text style={tw`text-xl text-white`}>John{/*{userName}*/}</Text>
      </View>
      {/* arrayOfMessages.map ((message,i) => {the component above} */}
      {/*key={i}*/}
      <View style={tw `bg-background flex-row w-10 h-10 my-2 text-center items-center justify-center rounded-2`}>
        <Text style={tw `text-white`}>Hello{/*message*/}</Text>
      </View>
    </View>
  )
}

export default Chat
