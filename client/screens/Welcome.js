import { View, Text } from 'react-native'
import React from 'react'
import UIButton from '../components/basic/UIButton'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View>
      <UIButton
        padding="5"
        color="secondary"
        text="join"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
        onPress={() => navigation.navigate('AddName')}
      />

      <UIButton
        padding="5"
        color="secondary"
        text="sign in   "
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export default Welcome
