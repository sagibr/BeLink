import React from 'react'
import { Image, Text, View } from 'react-native'
import Card from '../components/basic/Card'
import Swiper from '../components/basic/Swiper'
import UIButton from '../components/basic/UIButton'
import NavBar from '../components/templates/NavBar'
import tw from '../utils/config/tailwindConf'
import { VERTICAL_MARGIN } from '../utils/constants-swiper'


const Test = () => {
  return (
    <View style={tw`flex flex-col w-full items-center	justify-center relative `}>
      {/* <Text style={tw`text-center font-bold text-xl p-5`}>this is an example:</Text>
      <UIButton
        padding="5"
        width="4/5"
        color="secondary"
        text="hello sads"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
      /> */}
      <Swiper/>
      {/* <View style={tw`  w-1/6 h-1/6 `}>

      <Image style={{  position: "absolute", width: "100%", height: "100%", zIndex: 10}} source={{ uri: "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY" }} />
      </View> */}
      {/* <Image style={tw`  w-1/6 h-1/6 `} source={{ uri: "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY" }} /> */}
      {/* <View style={tw` top-0 w-1/6 h-1/6  bg-secondary`}></View>
      <View style={tw` top-0 w-1/6 h-1/6  bg-secondary`}></View> */}


    </View>
  )
}

export default Test
