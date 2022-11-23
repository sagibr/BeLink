import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../utils/config/tailwindConf'
import UIButton from '../components/basic/UIButton'
import {  useSelector } from 'react-redux'
const Settings = () => {
  const user = useSelector((state) => state.currentUser.currentUser).user

  return (
    <View style={[tw`flex-1`]}>
      {/* image */}
      <View style={tw`flex-1 mt-5`}>
        <Image
          style={tw`h-32 w-32 rounded-full m-left-1/3`}
          source={{ uri: user.image }}
        />
        <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>{`Welcom ${user.name}`}</Text>
      </View>

      <View style={tw`flex-2 flex justify-evenly py-10`}>
        {/* back to quiz */}
        <View >
          <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-xl`}>
            <Text style={tw`text-center text-white text-xl`}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {/* logout */}
        <View >
          <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-xl`}>
            <Text style={tw`text-center text-white text-xl`}>Logout</Text>
          </TouchableOpacity>
        </View>
        {/* delete accout */}
        <View >
          <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-xl`}>
            <Text style={tw`text-center text-white text-xl`}>Delete Profile</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Settings
