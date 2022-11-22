import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from '../../utils/config/tailwindConf'

const UIButton = (props) => {
  return (
    <TouchableOpacity
      style={tw`bg-${props.color} items-center  w-${props.width} p-${props.padding} rounded-${props.rounded}`}
      onPress={props.onPress}
    >
      <Text style={tw`text-${props.textColor} font-bold text-${props.textSize}`}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

/*
The UIButton is customizable by props. the props you can send to customize it are:

  color - the background color of the button (tailwind colors like: blue-300, red-700, primary, secondary etc...)
  width - the width of the button (tailwind width numbers: 2,6,44,96,1/2,3/5,full,fit etc...)
  padding - the padding of the button (tailwind padding numbers: 0,1,2,3,4,5,6 etc...)
  rounded - the border radius of the button (tailwind sizes: sm,md,lg,xl,2xl,3xl etc...)
  onPress - a function that will fire when the button is pressed
  textColor - the color of the text in the button (tailwind colors like: blue-300, red-700, primary, secondary etc...)
  textSize - the size of the text in the button (tailwind sizes: sm,md,lg,xl,2xl,3xl etc...)
  text - the text in the button
  
*/

export default UIButton
