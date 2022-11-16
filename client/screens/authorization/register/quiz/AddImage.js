import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'

const AddImage = () => {
  const [data, setData] = useState({})
  return (
    <View>
      <QuizTemplate
        Title={'Add Name'}
        Property="image"
        data={data}
        navigateTo={'AddAbout'}
        elements={
          <Input
            setData={(e) => setData(e)}
            height="20"
            placeholder="image"
            border="2"
            rounded_border="lg"
          />
        }
      />
    </View>
  )
}

export default AddImage
