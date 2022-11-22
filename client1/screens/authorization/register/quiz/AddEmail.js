import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'

const AddEmail = () => {
  const [data, setData] = useState({})
  return (
    //   onPress={() => navigation.navigate('AddName')}
    <View style={tw`w-full h-full`}>
      <QuizTemplate
        Title={'Add your email:'}
        Property="email"
        data={data}
        navigateTo={'AddPassword'}
        elements={
          <Input
            setData={(e) => setData(e)}
            height="20"
            placeholder="email:"
            border="2"
            rounded_border="lg"
          />
        }
      />
    </View>
  )
}

export default AddEmail
