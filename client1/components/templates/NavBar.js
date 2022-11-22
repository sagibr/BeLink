import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'
import { useNavigation } from '@react-navigation/native'
import {  useSelector } from 'react-redux'


const NavBar = () => {
  const navigation = useNavigation();

const user = useSelector((state) => state.currentUser.currentUser).user
  return (
      <View style={tw` w-full flex-row items-center justify-between content-center p-3 `}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
          <Image style={tw` h-10 w-10 rounded-full `} source={{ uri: user.image }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
          <Text style={tw`text-2xl font-bold text-primary`}>BeLink.</Text>
        </TouchableOpacity>

        <View></View>


      </View>
  )
}

/*
A navigation component for the home screen that allows you to switch between the home screen, profile and chat.
Pay attention! On the test page the transition does not work because there are no such screens
*/

export default NavBar
