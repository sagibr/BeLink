import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'
import { useNavigation } from '@react-navigation/native'

const ChatRow = ({item}) => {
    const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate("Message", {
            id: item.id,
            name: item.name,
            messages: item.messages
        });
    };
  return (
    <TouchableOpacity onPress={handleNavigation} style={[styles.cardShadow, tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`]}>
        <Image
        style={tw`w-16 h-16 rounded-full mr-4`}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY'
        }}
      />
      <View>
        <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
        <Text>Say Hi!</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatRow

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0, 
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    }
})