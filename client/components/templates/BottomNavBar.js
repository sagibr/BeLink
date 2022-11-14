import { View } from 'react-native'
import React from 'react'
import { Ionicons, SimpleLineIcons  } from '@expo/vector-icons';
import tw from '../../utils/config/tailwindConf';

const BottomNavBar = () => {
  return (
    <View style={tw`w-full h-full flex-row items-center justify-around content-center p-3 bg-white`}>
      {/* Chat */}
      <View>
        <SimpleLineIcons name="user" size={30} color="black" />
        
      </View>
      {/* Home */}
        <View>
        <Ionicons name="home-outline" size={30} color="black" />
        </View>
      {/* profile */}
      <View>
      <Ionicons name="chatbubbles-outline" size={30} color="black" />
      </View>
    </View>
  )
}

export default BottomNavBar
