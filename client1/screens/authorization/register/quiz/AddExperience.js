import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import Select1 from '../../../../components/basic/Select1'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
import AddExtraKnowledge from './AddExtraKnowledge'

const AddExperience = () => {
  const [data, setData] = useState({
    location: '',
    time: 0,
    role: '',
  })

  const selectArray = [
    {
      item: 'Devloper',
      id: 'Devloper',
    },
    {
      item: 'Devops',
      id: 'Devops',
    },
    {
      item: 'QA',
      id: 'QA',
    },
    {
      item: 'IT',
      id: 'IT',
    },
    {
      item: 'Data Analist',
      id: 'Data Analist',
    },
    {
      item: 'Cyber Security',
      id: 'Cyber Security',
    },
    {
      item: 'Hr',
      id: 'MCI',
    },
    {
      item: 'UI/UX',
      id: 'UI/UX',
    },
  ]

  return (
    <View style={tw`w-full h-full`}>
      <QuizTemplate
        Title={'Tell us about your work experience:'}
        Property="experience"
        data={data}
        navigateTo={AddExtraKnowledge}
        elements={
          <>
            <Input
              setData={(e) => setData({ ...data, location: e })}
              height="20"
              placeholder="what is your last job?"
              border="2"
              rounded_border="lg"
            />
            {/* 
            <Select1
              array={selectArray}
              setData={(e) => setData({ ...data, role: e })}
              height="20"
              placeholder="role"
              border="2"
              rounded_border="lg"
            /> */}
            <Input
              setData={(value) => setData({ ...data, time: value })}
              height="20"
              placeholder="how long did you work?"
              border="2"
              rounded_border="lg"
              type="number-pad"
            />
          </>
        }
      />
    </View>
  )
}

export default AddExperience
