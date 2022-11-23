import React, { useState } from 'react'
import { Text, View } from 'react-native'
import FileUpload from '../../../../components/basic/FileUpload'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
const AddImage = () => {
  const [data, setData] = useState({})
  return (
    <View>
      <QuizTemplate
        Title={'Add an image'}
        Property="image"
        data={data}
        navigateTo={'AddEducation'}
        elements={
          <FileUpload
            setPicture={(e) => setData(e)}
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

export default AddImage
