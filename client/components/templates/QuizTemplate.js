import React from 'react'
import { Text, View } from 'react-native'

const QuizTemplate = (props) => {
  return (
    <View style={tw`w-screen h-screen`}>
      <View style={tw`w-full h-1/6`}>{props.Title}</View>
      <View style={tw`w-full h-4/6`}>{props.Body}</View>
      <View style={tw`w-full h-1/6`}>{props.Button}</View>
    </View>
  )
}

export default QuizTemplate
