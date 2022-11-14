import React from 'react'
import { Text, Touchable, View, Image, TouchableNativeFeedback } from 'react-native'
import tw from '../../utils/config/tailwindConf'
// import userImage from '../../images/userimage.png'

const ChatList = () => {
  return (
    <TouchableNativeFeedback>
      <View style={tw`h-100% w-100% `}>
        <View style={tw`bg-background flex-row h-10% w-100% items-center mb-1`}>
          {/* <Image source={''}></Image> */}
          <Text style={tw`ml-3`}>Image</Text>
          <View style={tw`ml-9`}>
            <Text>userName</Text>
            <Text>
              {'Hey, this is a random message which was created by Matan!'.slice(0, 20) +
                '...'}
            </Text>
          </View>
        </View>
        <View style={tw`bg-background flex-row h-10% w-100% items-center `}>
          {/* <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            }}
          ></Image> */}
          <Text style={tw`ml-3`}>Image</Text>
          <View style={tw`ml-9`}>
            <Text>userName</Text>
            <Text>
              {/*messages[0].slice(0,20)+'...'*/}
              {'Hey, this is a random message which was created by Matan!'.slice(0, 20) +
                '...'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default ChatList
