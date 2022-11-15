import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../utils/redux/slices/userSlice'
import UIButton from '../basic/UIButton'
import Input from '../basic/Input'
import { useNavigation } from '@react-navigation/native'

const QuizTemplate = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { data } = props

  const [inputData, setInputData] = useState('')

  const user = useSelector((state) => state.user.value)

  const handlePress = () => {
    // const updatedUser = { property: props.property, value: data }
    dispatch(updateUser({ property: props.Property, value: data }))
    console.log(user)
  }

  return (
    <>
      <View
        style={tw`flex flex-col h-200 items-center	justify-between align-items-center`}
      >
        <View style={tw`w-full h-1/6 `}>
          <Text>{props.Title}</Text>
        </View>

        <View style={tw`w-full h-4/6`}>{props.elements}</View>

        <View style={tw`w-full h-1/6`}>
          <UIButton
            onPress={() => {
              handlePress()
              navigation.navigate(props.navigateTo)
            }}
            padding="5"
            color="secondary"
            text="send"
            textColor="red-700"
            textSize="2xl"
            rounded="3xl"
          ></UIButton>
        </View>
      </View>
    </>
  )
}

export default QuizTemplate
