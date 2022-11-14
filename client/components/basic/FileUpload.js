import React from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import tw from '../../utils/config/tailwindConf'

const FileUpload = (props) => {
  return (
    <View style={tw`relative p-${props.padding} m-${props.margin}`}>
      <MaterialCommunityIcons
        name="square-rounded-outline"
        size={props.size * 4}
        color={props.color}
        style={tw`relative`}
        onPress={props.onPress}
      >
        <AntDesign
          name="camerao"
          size={props.size}
          color={props.color}
          style={tw`item-center absolute bottom-35% left-38%`}
          onPress={props.onPress}
        />
        <AntDesign
          name="pluscircle"
          size={props.size}
          color={props.color}
          style={tw`item-center absolute bottom-13% right-18%`}
          onPress={props.onPress}
        />
      </MaterialCommunityIcons>
    </View>
  )
}

export default FileUpload

/*
The FileUpload is customizable by props. the props you can send to customize it are:

  color - the color of the new icon (all the three included) you need to write only the name of the color (without tailwind, like: black,blue,red,green)
  size - you can controle the size with change the number of the size. you need to write only the number like: 50,80,100
  padding - the padding of the icon (tailwind padding numbers: 0,1,2,3,4,5,6 etc...)
  margin - the margin of the icon (tailwind margin numbers: 0,1,2,3,4,5,6 etc...)
*/
