import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
const AddName = () => {
  const [data, setData] = useState({})
  return (
    <View style={tw`w-full h-full`}>
      <QuizTemplate
        Title={'What is your full name?'}
        Property="name"
        data={data}
        navigateTo={'AddEmail'}
        elements={
          <Input
            setData={(e) => setData(e)}
            height="20"
            placeholder="name:"
            border="2"
            rounded_border="lg"
          />
        }
      />
    </View>
  )
}

export default AddName
