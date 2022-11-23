import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, TouchableRipple } from 'react-native-paper'
import { useSelector } from 'react-redux'
import RowComponent from '../components/basic/RowComponent'
import SwiperComp from '../components/basic/SwiperComp'
import tw from '../utils/config/tailwindConf'
import { userRequest } from '../utils/requestMethods'

const ListMatch = () => {
  const user = useSelector((state) => state.currentUser.currentUser)
  const [allUsers, setAllUsers] = useState(null)
  const navigation = useNavigation()
  const fetchUsers = async () => {
    const userReq = userRequest(user.accessToken) || true
    const res = await userReq.get('match/generate')
    setAllUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
    console.log(allUsers)
  }, [])

  const removeFromAllUsers = (index) => {
    allUsers.splice(index, 1)
    setAllUsers([...allUsers])
  }

  const handleSwipedLeft = async (matchUser, index) => {
    const userReq = userRequest(user.accessToken)
    const res = await userReq.patch('/match/swipedLeft', { matchId: matchUser.id })
    console.log(res)
    removeFromAllUsers(index)
  }

  const handleSwipedRight = async (matchUser, index) => {
    const userReq = userRequest(user.accessToken)
    const res = await userReq.patch('/match/swipedRight', { matchId: matchUser.id })
    console.log('match: ' + res.data.match)
    if (res.data.match) {
      console.log('its a match')
    }
    removeFromAllUsers(index)
  }
  return (
    <SafeAreaView style={tw` w-full h-full`}>
      <View style={tw` w-full h-1/4 bg-primary`}></View>
      {allUsers == null ? (
        <Text>loading...</Text>
      ) : (
        allUsers.map((user, index) => {
          return (
            <RowComponent
              handleSwipedRight={handleSwipedRight}
              handleSwipedLeft={handleSwipedLeft}
              user={user}
              index={index}
            />
          )
        })
      )}
    </SafeAreaView>
  )
}

export default ListMatch
