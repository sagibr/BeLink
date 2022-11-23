import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'
import { useNavigation } from '@react-navigation/native'
import {  useDispatch, useSelector } from 'react-redux'
import UIButton from '../basic/UIButton'
import { userRequest } from '../../utils/requestMethods'
import { logout } from '../../utils/redux/slices/userLoginSlice'

const NavBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
const user = useSelector((state) => state.currentUser.currentUser).user
  return (
      <View style={tw`bg-white w-full flex-row items-center justify-between content-center p-3 `}>
        <View style={tw`flex-1`}>
          <Image style={tw` h-10 w-10 rounded-full `} source={{ uri: user.image }} />
        </View>
        <View onPress={()=>{navigation.navigate('Home')}} style={tw`flex-1`}>
          <Text style={tw`text-2xl font-bold text-primary`}>BeLink</Text>
        </View>

        <View style={tw`flex-1`}>

        <UIButton
        text="Logout"
        width="44"
        color="white"
        onPress={async () => {
          const userReq = userRequest()
          await userRequest('/auth/logout')
          dispatch(logout())
          navigation.navigate('Welcome')
        }}/>
        </View>


      </View>
  )
}

/*
A navigation component for the home screen that allows you to switch between the home screen, profile and chat.
Pay attention! On the test page the transition does not work because there are no such screens
*/

export default NavBar
