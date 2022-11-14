import React from 'react'
import { Text, View } from 'react-native'
import Swiper from '../components/basic/Swiper'
import BottomNavBar from '../components/templates/BottomNavBar'
import NavBar from '../components/templates/NavBar'
import tw from '../utils/config/tailwindConf'

const Home = () => {
  return (
    <View style={tw` w-full h-full `}>
      {/* NAVBAR */}
      <View style={tw`flex-1 `}>
        <NavBar />
      </View>

      {/* swiper */}
      <View style={tw`flex-10 `}>
        <Swiper />
      </View>

      {/* botoom NAVBAR */}
      <View style={tw`flex-1 `}>
        <BottomNavBar />
      </View>
    </View>
  )
}

export default Home
