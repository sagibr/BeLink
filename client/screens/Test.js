import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import InputTime from '../components/basic/InputTime'
import tw from '../utils/config/tailwindConf'
import Welcome from './Welcome'

const Test = () => {
  return (
    <View style={tw``}>
      <Welcome></Welcome>
      {/* <InputTime /> */}
    </View>
  )
}

export default Test
