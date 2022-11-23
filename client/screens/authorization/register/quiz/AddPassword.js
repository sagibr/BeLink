import React, { useState } from 'react'
import { Text, View } from 'react-native'
import PasswordInput from '../../../../components/basic/PasswordInput'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'

const AddPassword = () => {
  const [data, setData] = useState({})
  return (
    <View style={tw`w-full h-full`}> 
      <QuizTemplate
        Title={'Create a password'}
        Property="password"
        data={data}
        navigateTo={'AddLabeling'}
        elements={
          <PasswordInput
            setData={(e) => setData(e)}
            height="20"
            placeholder="password"
            border="2"
            rounded_border="lg"
          />
        }
      />
    </View>
  )
}

export default AddPassword
