import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login } from '../../../utils/redux/apiCalls'
import { useDispatch, useSelector  } from "react-redux";
import Input from '../../../components/basic/Input'
const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useDispatch();
  const user = useSelector((state) => state)



  // const login = async () => {
  //   await axios
  //     .post('http://10.0.2.2:4000/auth/login', {
  //       email: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       // console.log()
  //       const storeData = async (value) => {
  //         const jsonValue = JSON.stringify(value)
  //         try {
  //           await AsyncStorage.setItem('data', jsonValue)
  //         } catch (e) {
  //           console.log(e)
  //         }
  //       }

  //       const getData = async () => {
  //         try {
  //           const jsonValue = await AsyncStorage.getItem('data')
  //           jsonValue != null ? JSON.parse(jsonValue) : null
  //           console.log(jsonValue)
  //         } catch (e) {
  //           // error reading value
  //           console.log(e)
  //         }
  //       }

  //       storeData(res.data)
  //       getData()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  const handlePress = () => {
    console.log(email)
    console.log(password)
    login(dispatch, { email: email, password: password });
    
  }
  const [user1, setUser]= useState("")
  return (
    <SafeAreaView>
      <Input
            setData={(e) => setEmail(e)}
            height="20"
            placeholder="name"
            border="2"
            rounded_border="lg"
          />
      <Input
            setData={(e) => setPassword(e)}
            height="20"
            placeholder="name"
            border="2"
            rounded_border="lg"
          />

      <Button title="Login" onPress={handlePress}></Button>
    </SafeAreaView>
  )
}

export default Login
