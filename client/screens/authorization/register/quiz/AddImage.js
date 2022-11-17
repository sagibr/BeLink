import React, { useState } from 'react'
import { Text, View } from 'react-native'
import FileUpload from '../../../../components/basic/FileUpload'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'

const AddImage = () => {
  const [data, setData] = useState({})
  return (
    <View>
      <QuizTemplate
        Title={'Add your profile image:'}
        Property="image"
        data={data}
        navigateTo={'AddAbout'}
        elements={
            <FileUpload />
        }
      />
    </View>
  )
}

export default AddImage
