import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, SimpleLineIcons  } from '@expo/vector-icons';
import tw from '../../utils/config/tailwindConf';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`w-full h-full flex-row items-center justify-around content-center p-3 bg-white`}>
      {/* Chat */}
      <TouchableOpacity onPress={()=>{navigation.navigate('MyProfile')}}>
        <SimpleLineIcons name="user" size={30} color="black" />
        
      </TouchableOpacity>
      {/* Home */}
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <Ionicons name="home-outline" size={30} color="black" />
        </TouchableOpacity>
      {/* profile */}
      <TouchableOpacity onPress={()=>{navigation.navigate('Chats')}}>
      <Ionicons name="chatbubbles-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}


export default BottomNavBar
