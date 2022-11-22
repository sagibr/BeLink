import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import UIButton from '../../../../components/basic/UIButton'
import tw from '../../../../utils/config/tailwindConf'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
const AddLabeling = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`flex-1 bg-primary p-5 flex justify-end`}>
        <Text
          style={tw`text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-white`}
        >
          I am a...
        </Text>
      </View>
      <View style={tw`p-5 flex-row flex-6`}>
        <View style={tw`flex-1 flex items-center justify-center`}>
          <MaterialIcons name="work-outline" size={60} color="#3b82f6" />
          <View style={tw`pt-2`} />
          <UIButton
            padding="5"
            color="primary"
            text="worker"
            textColor="white"
            textSize="2xl"
            width="90%"
            rounded="3xl"
            onPress={() => navigation.navigate('AddProfession')}
          />
        </View>
        <View style={tw`flex-1 flex items-center justify-center`}>
          <MaterialCommunityIcons
            name="office-building-outline"
            size={60}
            color="#3b82f6"
          />
          <View style={tw`pt-2`} />
          <UIButton
            padding="5"
            color="primary"
            width="90%"
            text="company   "
            textColor="white"
            textSize="2xl"
            rounded="3xl"
            onPress={() => navigation.navigate('AddProfession')}
          />
        </View>
      </View>
    </View>
  )
}

export default AddLabeling
