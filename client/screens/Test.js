import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import InputTime from '../components/basic/InputTime'

import tw from '../utils/config/tailwindConf'
import Login from './authorization/login/Login'
import Welcome from './Welcome'
import ImagePicker from 'react-native-image-picker'
import SwiperComp from '../components/basic/SwiperComp'
const Test = () => {
  return (
    <View style={tw``}>
      {/* <Welcome></Welcome> */}
      <SwiperComp />
    </View>
  )
}

export default Test
