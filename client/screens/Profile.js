import React from 'react'
import { Image, Text, View } from 'react-native'
import Skills from '../components/basic/Skills'
import tw from '../utils/config/tailwindConf'
import { Linking } from 'react-native'
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Profile = () => {
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
    <View style={tw` w-full h-full `}>
      {/* image */}
      <View style={tw` flex-1 m-top-5`}>
        <Image
          style={tw` w-50 h-50 rounded-full m-left-1/4 `}
          source={{ uri: user.image }}
        />
      </View>

      <View style={tw` flex-3 `}>
        {/* details */}
        <View style={tw` flex-1 m-top-1`}>
          <View>
            <Text style={tw`text-3xl font-semibold text-center m-top-6`}>
              {user.name}
            </Text>
          </View>
          <View style={tw`flex-row justify-center m-top-9`}>
            <MaterialCommunityIcons name="professional-hexagon" size={24} color="black" />
            <Text>{user.profession}</Text>
            {/* <Text>{user.education[0]?.location}</Text> */}
          </View>
        </View>
        {/* line */}
        <View style={tw`my-3 h-px bg-gray-300 border-0 dark:bg-gray-700`} />

        {/* langauge */}
        <Text style={tw`text-center font-bold`}>technology:</Text>
        <View style={tw`flex flex-2 flex-row flex-wrap flex-start`}>
          {Object.keys(user.tech).map((tech, index) => {
            return <Skills key={index} tech={tech} />
          })}
        </View>

        <Text style={tw`text-center font-bold m-bottom-1`}>
          <FontAwesome name="book" size={24} color="black" /> education:{' '}
          {user.education[0]?.location}
        </Text>
        {/* line */}
        <View style={tw`my-2 h-px bg-gray-300 border-0 dark:bg-gray-700`} />

        {/* about */}
        <View style={tw` flex-1.5 `}>
          <Text style={tw`text-center font-bold m-top-3`}>about me: </Text>
          <Text style={tw`m-left-5 m-right-5 m-top-5`}>{user.about} </Text>
        </View>

        {/* line */}
        <View style={tw`my-3 h-px bg-gray-300 border-0 dark:bg-gray-700`} />

        {/* links */}
        <View style={tw`flex-row flex-0.5 justify-center items-center justify-around `}>
          <Entypo
            name="linkedin-with-circle"
            size={24}
            color="blue"
            onPress={() => Linking.openURL('http://linkedin.com')}
          />

          <AntDesign
            name="github"
            size={24}
            color="black"
            onPress={() => Linking.openURL('http://github.com')}
          />
        </View>
      </View>
    </View>
  )
}

export default Profile
