import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const FinshQuiz = ({route}) => {
    const { tech} = route.params
    const user = useSelector((state) => state.user.value)

    console.log("tech is",tech);
    console.log("user is",user);
  return (
    <View>
      <Text>FinshQuiz</Text>
    </View>
  )
}

export default FinshQuiz