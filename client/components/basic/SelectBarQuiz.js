import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'
import SelectBarQuizRow from './SelectBarQuizRow'

const SelectBarQuiz = () => {
  return (
    <View style={tw`w-full h-1/2 p-2`}>
      <Text>SelectBarQuiz</Text>
      <SelectBarQuizRow/>
    </View>
  )
}

export default SelectBarQuiz