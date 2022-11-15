import React from 'react'
import { Text, View } from 'react-native'
import FileUpload from '../components/basic/FileUpload'
import Input from '../components/basic/Input'
import Select from '../components/basic/Select'
import UIButton from '../components/basic/UIButton'
import QuizTemplate from '../components/templates/QuizTemplate'
import tw from '../utils/config/tailwindConf'
import AddEducation from './authorization/register/quiz/AddEducation'
import AddExperience from './authorization/register/quiz/AddExperience'
import AddExtraKnowledge from './authorization/register/quiz/AddExtraKnowledge'
import AddName from './authorization/register/quiz/AddName'
import Welcome from './Welcome'
import TimeCalc from '../components/basic/TimeCalc'
const Test = () => {
  return (
    <View>
      {/* <AddEducation></AddEducation>
      <AddExperience></AddExperience>
      <AddName></AddName>
      <FileUpload color="red" size={70} padding="5" margin="5" /> */}
      {/* <AddName /> */}
      {/* <Welcome /> */}
      <TimeCalc></TimeCalc>
    </View>
  )
}

export default Test
