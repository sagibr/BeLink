import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../utils/config/tailwindConf'
import SenderMessage from '../components/ChatClone/SenderMessage'
import RecieverMessage from '../components/ChatClone/RecieverMessage'
import socket from '../utils/socket/socket'
import {  useSelector } from 'react-redux'
// import { publicRequest } from "../requestMethods"
const MessageScreen = ({ route }) => {
  const { name, id, messages } = route.params
  const [input, setInput] = useState('')
  const [chatMessages, setChatMessages] = useState(messages)

  const user = useSelector((state) => state.currentUser.currentUser?.user?.name) 

  useEffect(() => {
    socket.emit('join_room', id)
  }, [])
  useEffect(() => {
    console.log('socket change')
    socket.on('receive_message', (message) =>
      setChatMessages((chatMessages) => [...chatMessages, message])
    )
  }, [socket])

  /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`
    const newMessage = { text: input, user: user, timestamp: { hour, mins } }
    setChatMessages((chatMessages) => [...chatMessages, newMessage])
    
    if (user) {
      socket.emit('send_message', { text: input, user: user, timestamp: { hour, mins }, room_id: id })
      // publicRequest.post(`/message/${id}`, )
    }
    console.log(newMessage)
  }

  return (
    <SafeAreaView style={tw`relative w-full h-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {chatMessages.map((message, index) => {
            return message.user === user ? (
              <SenderMessage key={index} message={message} />
            ) : (
              <RecieverMessage key={index} message={message} />
            )
          })}
        </View>
      </TouchableWithoutFeedback>

      <View
        style={tw`absolute w-full bottom-0 flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder="send Message"
          onChangeText={setInput}
          value={input}
        />
        <Button title="send" color="#ff5864" onPress={handleNewMessage} />
      </View>
    </SafeAreaView>
  )
}

export default MessageScreen
