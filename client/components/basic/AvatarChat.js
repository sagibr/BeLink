import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'

const AvatarChat = ({user}) => {
  return (
    <View style={tw`flex-row items-center justify-start w-full h-1/6 pt-30`}>
      <Image
        style={tw`w-10 h-10 rounded-full ml-3`}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY'
        }}
      />
      <View style={tw`ml-3`}>
        <Text>Jese Leos</Text>
        <Text style={tw`text-sm text-gray-500 dark:text-gray-400`}>lets chat</Text>
      </View>
    </View>
  )
}

export default AvatarChat
