import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity, Image} from 'react-native'
import tw from 'tailwind-rn';

const Match = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const { loggedInProfile, userSwiped } = params;


  return (
    <View style={[tw `{h-full bg-red-500 pt-20`, { opacity : 0.89 }]}>
      <View style={tw `justify-center px-10 pt-20`}>
        <Image style={tw `h-20 w-full`} source={{uri : "http;//links.paperact.com/mg9"}}/>
      </View>

      <Text style={tw `text-white text-center mt-5`}>
        You and {userSwiped.displayName} have like each other
      </Text>

      <View style={tw `flex-row justify-evenly mt-5`}>

      <Image style={tw `h-32 w-32 rounded-full`}
      source={{uri : loggedInProfile.photoURL}}/>
      
      <Image style={tw `h-32 w-32 rounded-full`}
      source={{uri : userSwiped.photoURL}}/>
      </View>

      <TouchableOpacity
      style={tw `bg-white m-5 px-10 py-8 rounded-full mt-20`}
      onPress={() => {
        navigation.goBack();
        navigation.navigate("chat");
      }}>
        <Text style={tw `text-center`}>send a message</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Match
