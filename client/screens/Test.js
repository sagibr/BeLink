import React from 'react'
import { Image, Text, View } from 'react-native'
import Card from '../components/basic/Card'
import Skills from '../components/basic/Skills'
import Swiper from '../components/basic/Swiper'
import UIButton from '../components/basic/UIButton'
import NavBar from '../components/templates/NavBar'
import tw from '../utils/config/tailwindConf'
import { VERTICAL_MARGIN } from '../utils/constants-swiper'
import Home from './Home'
import Profile from './Profile'
import Settings from './Settings'


const Test = () => {
  return (
    <View style={tw` `}>
      
      {/* <Home/> */}

      {/* <Profile/> */}
       
      <Settings/>

    </View>
  )
}

export default Test
