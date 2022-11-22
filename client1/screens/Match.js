import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import tw from '../utils/config/tailwindConf'

const Match = () => {
  const navigation = useNavigation()
  const { params } = useRoute()

  const user = {
    name: 'sagi',
    email: 'sagi@gmail.com',
    password: 'sagi',
    profession: ['developer'],
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
    about: 'im a full stack developer',
    links: ['linkdin/sagi.com'],
    education: [{ location: 'cyberPro', time: 5, profession: 'developer' }],
    experience: [{ location: 'BeLink', time: 12, role: 'developer' }],
    tech: { nodejs: 12, html: 12, css: 12, 'c#': 5 },
    grade: '90%',
  }

  return (
    <View style={[tw`h-full bg-red-500 pt-20`, { opacity: 0.89 }]}>
      <View style={tw`justify-center px-10 pt-20`}>
        <Image style={tw`h-20 w-full`} source={require('../images/match.png')} />
      </View>

      <Text style={tw`text-white text-center text-xl mt-15 mb-10`}>
        You and {user.name} have like each other
      </Text>

      <View style={tw`flex-row justify-evenly mt-5`}>
        <Image
          style={tw`h-32 w-32 rounded-full`}
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
          }}
        />

        <Image
          style={tw`h-32 w-32 rounded-full`}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGMTjztvv-g1Gj--sMjcXmOmhIyuisOpfl6bC1IF6gEfnkgGO-uW537LbnVWDBHDrTW8&usqp=CAU',
          }}
        />
      </View>

      <TouchableOpacity
        style={tw`bg-white m-5 px-10 py-8 rounded-full mt-20`}
        onPress={() => {
          navigation.goBack()
          navigation.navigate('chat')
        }}
      >
        <Text style={tw`text-center`}>send a message</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Match
