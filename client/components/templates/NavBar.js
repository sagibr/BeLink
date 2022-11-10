import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const user = 
{
  email: "ronen@gmail.com",
  username: "Ronen",
  profession: "Devloper",
  image: "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY",
  about: "I have been a programmer for five years focusing on the back end",
  Likes: [],
  education: [],
  experience: [],
  tech: {}
}

const NavBar = () => {
  const navigation = useNavigation();
  return (
      <View style={tw` w-full flex-row items-center justify-between content-center p-3 `}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Test')}}>
          <Image style={tw` h-10 w-10 rounded-full `} source={{ uri: user.image }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
          <Text style={tw`text-2xl font-bold text-primary`}>BeLink.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Chats')}}>
          <Ionicons name="chatbubbles-outline" size={30} color="#961823" />
        </TouchableOpacity>
      </View>
  )
}

/*
A navigation component for the home screen that allows you to switch between the home screen, profile and chat.
Pay attention! On the test page the transition does not work because there are no such screens
*/

export default NavBar
