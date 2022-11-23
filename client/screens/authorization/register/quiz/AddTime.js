import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputTime from '../../../../components/basic/InputTime'
import tw from '../../../../utils/config/tailwindConf'
import UIButton from '../../../../components/basic/UIButton'
import { useNavigation } from '@react-navigation/native'

const AddTime = () => {
  const techs = useSelector((state) => state.user.value.tech)
  const user = useSelector((state) => state.user.value)
  const [data, setData] = useState([])
  const [isPress, setIsPress] = useState(false)
  const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate("FinshQuiz", {
            tech: data,
        });
    };
  console.log(data)
  console.log(techs)
  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`flex-1 bg-primary p-5 flex justify-end`}>
        <Text
          style={tw`text-3xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white`}
        >
          How long experience do you have?
        </Text>
      </View>

      <View style={tw`flex-4 flex justify-center`}>
        {techs.map((tech, index) => {
          return <InputTime key={index} tech={tech.item} isPress={isPress} setData={setData} data={data} />
        })}
      </View>
      <View style={tw`flex-1 flex justify-end p-5`}>
        <UIButton
          onPress={() => {
            setIsPress(true)
          }}
          padding="5"
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

export default AddTime
