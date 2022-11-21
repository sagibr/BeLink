import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

function Card({ user }) {
  const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate("Profile", {
            user: user
        });
    };
  return user ? (
    <View style={[tw` h-90% w-90%  `]}>
      <Image style={tw`w-full h-full rounded-lg`} source={{ uri: user.image }} />

      <View
        style={tw`absolute bottom-0 bg-white w-full h-20 flex-row justify-center justify-between rounded-b-md items-center content-center px-6 py-2 bg-opacity-10`}
      >
        <View>
          <Text style={tw` text-xl font-semibold text-white`}>{user.username}</Text>
          <Text style={tw`text-white`}>{user.profession}</Text>
        </View>
        <View
          style={tw`w-10 h-10 border-2 border-primary rounded-full justify-center items-center content-center `}
        >
          <MaterialCommunityIcons name="information-variant" size={24} color="white" onPress={handleNavigation}/>
        </View>
      </View>
     
    </View>
  ) : (
    <></>
  )
}

export default Card
