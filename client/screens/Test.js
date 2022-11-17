import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SelectBarQuiz from '../components/basic/SelectBarQuiz'
import SelectBarQuizRow from '../components/basic/SelectBarQuizRow'
import tw from '../utils/config/tailwindConf'
import Welcome from './Welcome'

const Test = () => {
  return (
    <View style={tw``}>
      <Text>Test</Text>
      <SelectBarQuiz/>
    </View>
  )
}

export default Test
