import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import tw from '../utils/config/tailwindConf'
import ListMatch from './ListMatch'
import Home from './Home'
const Test = () => {
  return (
    <View style={tw`w-full h-full`}>
      <ListMatch/>
      {/* <Home/> */}
    </View>
  )
}

export default Test
