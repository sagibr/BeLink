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
        Title={'Add Image'}
        Property="image"
        data={data}
        navigateTo={'AddAbout'}
        elements={
          <>
            <Input
              setData={(e) => setData(e)}
              height="20"
              placeholder="image"
              border="2"
              rounded_border="lg"
            />
            <FileUpload />
          </>
        }
      />
    </View>
  )
}

export default AddImage
