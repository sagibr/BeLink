import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'

const AddPassword = () => {
  const [data, setData] = useState({})
  return (
    <View>
      <QuizTemplate
        Title={'Add password'}
        Property="password"
        data={data}
        navigateTo={'AddLabeling'}
        elements={
          <Input
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
