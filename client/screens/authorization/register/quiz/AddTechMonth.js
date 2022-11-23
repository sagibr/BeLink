import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import UIButton from '../../../../components/basic/UIButton'
import tw from '../../../../utils/config/tailwindConf'
import { updateUser } from '../../../../utils/redux/slices/userSlice'
import { publicRequest, userRequest } from '../../../../utils/requestMethods'
const AddTechMonth = () => {
  const dispatch = useDispatch()
  let user = useSelector((state) => state.user.value)

  const data = []
  const [tech, setTech] = useState(useSelector((state) => state.user.value.tech))

  useEffect(() => {
    dispatch(updateUser({ property: 'tech', value: tech }))
    console.log(tech)
    dispatch(updateUser({ property: 'tech', value: tech }))
    const newUser = { ...user }
    newUser.tech = tech
    newUser['company'] = { isCompany: false }
    const about = newUser.about
    newUser.about = about.text
    newUser.links = [about.links]
    newUser.profession = [newUser.profession]
    console.log(newUser)
    publicRequest.post('/auth/register', newUser)
  }, [tech])

  const handleClick = async () => {
    let newTech = []
    for (let index = 0; index < tech.length; index++) {
      newTech.push(setNewData(index))
    }
    console.log('asdasda')
    setTech(newTech)
  }

  const setNewData = (index) => {
    return { ...tech[index], time: data[index] }
  }

  const handleChange = (newText) => {
    data.push(newText)
  }

  return (
    <View style={tw`w-full h-full bg-white `}>
        <View style={tw`flex-1 bg-primary p-5 flex justify-end`}>
          <Text
            style={tw`text-3xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white`}
          >
            HOW LONG DID YOU WORK
          </Text>
        </View>

        <View style={tw`flex-4 flex justify-center`}>
        {tech.map((item, index) => (
        <View key={index} style={tw`w-full pt-1 overflow-scroll`}>
          <TextInput
          
            placeholder={tech[index].id}
            keyboardType="number-pad"
            onChangeText={(newText) => {
              handleChange(newText)
            }}
          ></TextInput>
        </View>
      ))}
        </View>

     

        <View style={tw`flex-1 flex justify-end p-5`}>
          <UIButton
            onPress={() => handleClick()}
            padding="5"
            color="primary"
            text="submit"
            textColor="white"
            textSize="2xl"
            rounded="full"
          ></UIButton>
        </View>
      </View>
    // <View>

    //   <Text>HOW LONG DID YOU WORK</Text>
    //   {tech.map((item, index) => (
    //     <View key={index}>
    //       <TextInput
    //         placeholder={tech[index].id}
    //         keyboardType="number-pad"
    //         onChangeText={(newText) => {
    //           handleChange(newText)
    //         }}
    //       ></TextInput>
    //     </View>
    //   ))}
    //   <Button onPress={() => handleClick()} title="Submit"></Button>

    // </View>

  )
}

export default AddTechMonth
