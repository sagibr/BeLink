import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import AddExtraKnowledge from './AddExtraKnowledge'

const AddExperience = () => {
  const [data, setData] = useState({
    location: '',
    time: 0,
    profession: '',
  })

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
        Title={'Add expience'}
        Property="experience"
        data={data}
        navigateTo={AddExtraKnowledge}
        elements={
          <>
            <Input
              setData={(e) => setData({ ...data, location: e })}
              height="20"
              placeholder="location"
              border="2"
              rounded_border="lg"
            />
            <Select
              array={selectArray}
              setData={(e) => setData({ ...data, role: e })}
              height="20"
              placeholder="role"
              border="2"
              rounded_border="lg"
            />
          </>
        }
      />
    </View>
  )
}

export default AddExperience
