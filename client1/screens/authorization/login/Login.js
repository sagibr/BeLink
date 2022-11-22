import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { login } from '../../../utils/redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import tw from '../../../utils/config/tailwindConf'
import UIButton from '../../../components/basic/UIButton'
import Input from '../../../components/basic/Input'
import PasswordInput from '../../../components/basic/PasswordInput'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useDispatch()
  const handlePress = () => {
    console.log(email)
    console.log(password)
    login(dispatch, { email: email, password: password })
  }
  return (
    <View style={tw`w-full h-full bg-white `}>
      <View style={tw`flex-1 bg-primary p-5 flex justify-end`}>
        <Text
          style={tw`text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-white`}
        >
          Login
        </Text>
      </View>

      <View style={tw`flex-4 flex justify-center`}>
        <Input
          setData={(e) => setEmail(e)}
          height="10"
          placeholder="Email:"
          border="2"
          rounded_border="lg"
        />
        <PasswordInput
          setData={(e) => setPassword(e)}
          height="10"
          placeholder="Password"
          border="2"
          rounded_border="lg"
        />
      </View>
      <View style={tw`flex-1 flex justify-end p-5`}>
        <UIButton
          onPress={handlePress}
          padding="2"
          color="primary"
          text="send"
          textColor="white"
          textSize="2xl"
          rounded="full"
        ></UIButton>
      </View>
    </View>
  )
}

export default Login
