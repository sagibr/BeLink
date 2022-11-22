import { View, Text, Image } from 'react-native'
import React from 'react'
import UIButton from '../components/basic/UIButton'
import { useNavigation } from '@react-navigation/native'
import tw from '../utils/config/tailwindConf'
const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`w-full h-full bg-primary`}>
      <View style={tw`flex-1`}>
        <Image
          style={tw`w-full h-full rounded-lg`}
          source={require('../assets/quiz-image/logo.png')}
        />
      </View>
      <View style={tw`flex-1 p-5`}>
        <UIButton
          padding="5"
          color="white"
          text="join"
          textColor="blue-500"
          textSize="2xl"
          rounded="full"
          onPress={() => navigation.navigate('AddName')}
        />
        <View style={tw` mt-5`} />
        <UIButton
          padding="5"
          color="white"
          text="sign in"
          textColor="blue-500"
          textSize="2xl"
          rounded="full"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  )
}

export default Welcome
{
  /* <View style={tw`w-full h-full bg-primary`}>
      <View style={tw`flex-1`}>
        <Image style={tw`w-full h-full rounded-lg`} source={require("../assets/quiz-image/Logo.png")} />
      </View>
      <View style={tw`flex-1 p-5`}>
        <UIButton
          padding="5"
          color="white"
          text="join"
          textColor="blue-500"
          textSize="2xl"
          rounded="full"
          onPress={() => navigation.navigate('AddName')}
        />
        <View style={tw` mt-5`}/>

        <UIButton 
          padding="5"
          color="white"
          text="sign in"
          textColor="blue-500"
          textSize="2xl"
          rounded="full"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View> */
}
