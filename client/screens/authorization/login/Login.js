import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async () => {
    await axios
      .post('http://10.0.2.2:4000/auth/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log()
        const storeData = async (value) => {
          const jsonValue = JSON.stringify(value)
          try {
            await AsyncStorage.setItem('data', jsonValue)
          } catch (e) {
            console.log(e)
          }
        }

        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('data')
            jsonValue != null ? JSON.parse(jsonValue) : null
            console.log(jsonValue)
          } catch (e) {
            // error reading value
            console.log(e)
          }
        }

        storeData(res.data)
        getData()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handlePress = () => {
    console.log(email)
    console.log(password)
  }
  return (
    <SafeAreaView>
      <TextInput placeholder="Email..." onChangeText={setEmail}></TextInput>
      <TextInput placeholder="Password..." onChangeText={setPassword}></TextInput>
      <Button title="Login" onPress={login}></Button>
    </SafeAreaView>
  )
}

export default Login
