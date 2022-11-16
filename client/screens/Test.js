import React from 'react'
import { Text, View } from 'react-native'
import FileUpload from '../components/basic/FileUpload'
import UIButton from '../components/basic/UIButton'
import QuizTemplate from '../components/templates/QuizTemplate'
import tw from '../utils/config/tailwindConf'
import AddEducation from './authorization/register/quiz/AddEducation'
import AddExperience from './authorization/register/quiz/AddExperience'
import AddExtraKnowledge from './authorization/register/quiz/AddExtraKnowledge'
import AddName from './authorization/register/quiz/AddName'
import Welcome from './Welcome'
import TimeCalc from '../components/basic/TimeCalc'
import Login from './authorization/login/Login'
const Test = () => {
  return (
    <View style={tw`flex flex-col w-full items-center	justify-center`}>
      {/* <Text style={tw`text-center font-bold text-xl p-5`}>this is an example:</Text>
      <UIButton
        padding="5"
        width="4/5"
        color="secondary"
        text="hello sads"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
      />
      <FileUpload color="red" size={70} padding="5" margin="5" /> */}
      <Login/>
    </View>
  )
}

export default Test
