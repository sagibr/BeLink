import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatRow from '../components/ChatClone/ChatRow'
import {  useSelector } from 'react-redux'
const ChatScreen = () => {
  //👇🏻 Dummy list of rooms
  const Dummyrooms = [
    {
      id: '1',
      name: 'Novu Hangouts',
      messages: [
        {
          id: '1a',
          text: 'Hello guys, welcome!',
          time: '07:50',
          user: 'Tomer',
        },
        {
          id: '1b',
          text: 'Hi Tomer, thank you! 😇',
          time: '08:50',
          user: 'David',
        },
      ],
    },
    {
      id: '2',
      name: 'Hacksquad Team 1',
      messages: [
        {
          id: '2a',
          text: "Guys, who's awake? 🙏🏽",
          time: '12:50',
          user: 'Team Leader',
        },
        {
          id: '2b',
          text: "What's up? 🧑🏻‍💻",
          time: '03:50',
          user: 'Victoria',
        },
      ],
    },
  ]
  const [rooms, setRooms] = useState(Dummyrooms)
  
  const user = useSelector((state) => state.currentUser.currentUser?.user) 
  useEffect (() => {
    setRooms(user.chatList)
  
    
  }, [])
  
  return (
    <View>
      <View>
        {rooms.length > 0 ? (
          rooms.map((item, index) => {
            console.log(item)
            return (
              <ChatRow
                key={index}
                item={item}
              />
            )
          })
        ) : (
          <View>
            <Text>No Match, continue swipe!</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default ChatScreen
