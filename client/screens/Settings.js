import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../utils/config/tailwindConf'
import UIButton from '../components/basic/UIButton'

const Settings = () => {
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
    <View style={[tw`h-full bg-black-500 pt-20`, { opacity: 0.89 }]}>
      {/* image */}
      <View style={tw`flex 1`}>
        <Image
          style={tw`h-32 w-32 rounded-full m-left-1/3`}
          source={{ uri: user.image }}
        />
      </View>

      {/* back to quiz */}
      <View style={tw`flex 1`}>
        <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-full mt-20`}>
          <Text style={tw`text-center`}>edit profile</Text>
        </TouchableOpacity>
      </View>
      {/* delete accout */}
      <View style={tw`flex 1`}>
        <TouchableOpacity style={tw`bg-primary m-5 px-10 py-8 rounded-full mt-20`}>
          <Text style={tw`text-center`}>delete profile</Text>
        </TouchableOpacity>
      </View>
      {/* delete accout */}
    </View>
  )
}

export default Settings
