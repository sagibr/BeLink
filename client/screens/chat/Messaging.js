import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, TextInput, Text, FlatList, Pressable } from 'react-native'
// import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from '../../components/basic/MessageComponent'
import socket from '../../utils/socket/socket'
import { styles } from '../../utils/styles'

const Messaging = ({ route, navigation }) => {
  const [chatMessages, setChatMessages] = useState([])
  const [message, setMessage] = useState('')
  const [user, setUser] = useState('gilad')

  //👇🏻 Access the chatroom's name and id
  const { name, id } = route.params

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
    setChatMessages((chatMessages) => [
      ...chatMessages,
      { text: message, user: user, timestamp: { hour, mins } },
    ])
    if (user) {
      socket.emit('send_message', {
        message,
        room_id: id,
        user: 'dan',
        timestamp: { hour, mins },
      })
    }
  }

  return (
    <View style={styles.messagingscreen}>
      <View
        style={[styles.messagingscreen, { paddingVertical: 15, paddingHorizontal: 10 }]}
      >
        {chatMessages[0]
          ? chatMessages.map((item, index) => {
              return <MessageComponent key={index} item={item} user={user} />
            })
          : ''}
      </View>

      <View style={styles.messaginginputContainer}>
        <TextInput
          style={styles.messaginginput}
          onChangeText={(value) => setMessage(value)}
        />
        <Pressable style={styles.messagingbuttonContainer} onPress={handleNewMessage}>
          <View>
            <Text style={{ color: '#f2f0f1', fontSize: 20 }}>SEND</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Messaging
