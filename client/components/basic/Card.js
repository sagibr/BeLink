import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'
import { Entypo, AntDesign } from '@expo/vector-icons'

const DATA = {
  email: 'ronen@gmail.com',
  username: 'Ronen',
  profession: 'Devloper',
  image:
    'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
  about: 'I have been a programmer for five years focusing on the back end',
  Likes: [],
  education: [],
  experience: [],
  tech: {},
  grade: '90%',
}

const Card = () => {
  return (
    <View style={tw` bg-white h-5/6 w-5/6 rounded-xl `}>
      <Image style={tw` h-full w-full rounded-xl `} source={{ uri: DATA.image }} />

      <View
        style={tw`absolute bottom-0 bg-white w-full h-20 flex-row justify-center justify-between flex-row rounded-b-md px-6 py-2`}
      >
        <View>
          <Text style={tw` text-xl font-semibold`}>{DATA.username}</Text>
          <Text>{DATA.profession}</Text>
        </View>
        <View
          style={tw`w-15 h-15 border-2 border-primary rounded-full justify-items-center justify-center items-center`}
        >
          <Text style={tw`text-xl font-bold`}>{DATA.grade}</Text>
        </View>
      </View>

      <View style={tw`pt-5 flex flex-row justify-evenly`}>
        <TouchableOpacity style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}>
          <Entypo name="cross" size={24}  color="red"/>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}>
        <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card
