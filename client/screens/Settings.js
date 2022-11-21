import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../utils/config/tailwindConf'
import UIButton from '../components/basic/UIButton'
import {  useSelector } from 'react-redux'
const Settings = () => {
  const user = useSelector((state) => state.currentUser.currentUser).user

  return (
    <View style={[tw`h-full pt-20`, { opacity: 0.89 }]}>
      {/* image */}
      <View style={tw`flex-1`}>
        <Image
          style={tw`h-32 w-32 rounded-full m-left-1/3`}
          source={{ uri: user.image }}
        />
      </View>

      {/* back to quiz */}
      <View style={tw`flex-1`}>
        <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-full mt-20`}>
          <Text style={tw`text-center`}>edit profile</Text>
        </TouchableOpacity>
      </View>
      {/* delete accout */}
      <View style={tw`flex-1`}>
        <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-full mt-20`}>
          <Text style={tw`text-center`}>delete profile</Text>
        </TouchableOpacity>
      </View>
      {/* delete accout */}
    </View>
  )
}

export default Settings
