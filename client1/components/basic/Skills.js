import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'

const Skills = ({tech}) => {
  return (
    <View style={tw`px-6 pt-4 pb-2 w-1/2 flex items-center content-center `}>
        <Text style={tw` bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{tech}</Text>
    </View>
  )
}

export default Skills