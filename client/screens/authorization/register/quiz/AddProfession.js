import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'

const AddProfession = () => {
  const [data, setData] = useState({})

  const selectArray = [
    'Devloper',
    'Devops',
    'QA',
    'IT',
    'Data Analist',
    'Cyber Security',
    'Hr',
    'UI/UX',
  ]
  return (
    <View>
      <QuizTemplate
        Title={'Add Name'}
        Property="profession"
        data={data}
        navigateTo={'AddImage'}
        elements={
          <Select
            array={selectArray}
            setData={(e) => setData(e)}
            height="20"
            placeholder="profession"
            border="2"
            rounded_border="lg"
          />
        }
      />
    </View>
  )
}

export default AddProfession
