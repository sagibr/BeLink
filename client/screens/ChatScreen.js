import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatRow from '../components/ChatClone/ChatRow'
import { useDispatch, useSelector } from 'react-redux'
import tw from '../utils/config/tailwindConf'
import NavBar from '../components/templates/NavBar'
import BottomNavBar from '../components/templates/BottomNavBar'
import { userRequest } from '../utils/requestMethods'
import { login } from '../utils/redux/apiCalls'
const ChatScreen = () => {
  const [rooms, setRooms] = useState([])

  const dispatch = useDispatch()
  const user = useSelector((state) => state.currentUser.currentUser?.user)
  const [newUser, setNewUser] = useState(user)
  const updateUser = async () => {
    const userReq = userRequest(user.accessToken)
    const res = await userReq('/auth/refresh')
    setNewUser(res.data.user)
  }
  useEffect(() => {
    console.log(newUser)
    setRooms(newUser.chatList)
  }, [newUser])
  useEffect(() => {
    updateUser()
    setRooms(user.chatList)
  }, [])

  return (
    <View style={tw` w-full h-full `}>
      <View style={tw`flex-10 `}>
        {rooms.length > 0 ? (
          rooms.map((item, index) => {
            console.log(item)
            return <ChatRow key={index} item={item} />
          })
        ) : (
          <View>
            <Text>No Match, continue swipe!</Text>
          </View>
        )}
      </View>
      {/* botoom NAVBAR */}
      <View style={tw`flex-1 `}>
        <BottomNavBar />
      </View>
    </View>
  )
}

export default ChatScreen
