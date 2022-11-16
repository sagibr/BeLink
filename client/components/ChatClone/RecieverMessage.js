import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from '../../utils/config/tailwindConf'

const RecieverMessage = ({message}) => {
  return (
    <View>
        <Image
        style={tw` w-12 h-12 rounded-full absolute top-0 `}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY'
        }}
      />
    <View style={[tw`bg-red-400 rounded-lg rounded-tr-none px-5 py-3 mx-3 ml-14`, {alignSelf: "flex-start"}]}>
        
        <Text style={tw`text-white`}>{message.text}</Text>
    </View>
    </View>
  )
}

export default RecieverMessage