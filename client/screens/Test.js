import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import FileUpload from '../components/basic/FileUpload'
import tw from '../utils/config/tailwindConf'
import Login from './authorization/login/Login'
import Welcome from './Welcome'
const Test = () => {
  return (
    <View style={tw``}>
      {/* <Welcome></Welcome> */}
      {/* <Text>heloo</Text> */}
      <Login/>
    </View>
  )
}

export default Test
