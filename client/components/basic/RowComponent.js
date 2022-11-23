import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  Avatar,
  Button,
  Card,
  IconButton,
  MD3Colors,
  TouchableRipple,
} from 'react-native-paper'
import { useSelector } from 'react-redux'
import tw from '../../utils/config/tailwindConf'
import { userRequest } from '../../utils/requestMethods'

const RowComponent = ({ user, handleSwipedLeft, handleSwipedRight, index }) => {
  const myUser = useSelector((state) => state.currentUser.currentUser)
  const [isPress, setIsPress] = useState(false)

  const navigation = useNavigation()

  const handleNavigation = () => {
    console.log('click Inform')
    navigation.navigate('Profile', {
      user: user,
    })
  }

  return (
    <>
    
      <TouchableRipple
        style={tw`w-full h-1/6 bg-white`}
        onPress={() => {
          setIsPress(!isPress)
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={tw` flex-row p-5 flex-1`}>
          <View style={tw` flex-2 flex items-center`}>
            <Avatar.Image size={100} source={{ uri: user.image }} />
          </View>
          <View style={tw` flex-3 flex justify-center content-center`}>
            <Text style={tw`font-bold font xl`}>{user.name}</Text>
            <Text style={tw`pt-1`}>{user.profession}</Text>
            <Text style={tw`pt-1`}>{user.about}</Text>
          </View>
          <View style={tw` flex-1 flex content-center justify-center`}>
            <View
              style={tw`w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center content-center `}
            >
              <IconButton
                icon="information-variant"
                size={20}
                onPress={handleNavigation}
              />
            </View>
          </View>
        </View>
      </TouchableRipple>
      {isPress ? (
        <Card>
          <Card.Actions
            style={tw`flex justify-center items-center content-center flex-row justify-around`}
          >
            <Button
              mode="contained"
              onPress={() => {
                handleSwipedLeft(user, index)
                setIsPress(false)
              }}
              style={tw`bg-red-500`}
            >
              No match
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                handleSwipedRight(user, index)
                setIsPress(false)
              }}
              style={tw`bg-green-500`}
            >
              Lets start!
            </Button>
          </Card.Actions>
        </Card>
      ) : null}
    </>
  )
}

export default RowComponent
