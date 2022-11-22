import CheckBox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import Select1 from '../../../../components/basic/Select1'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
import AddExperience from './AddExperience'

const AddEducation = () => {
  const [data, setData] = useState({
    location: '',
    time: 0,
    profession: '',
    degree: false,
  })
  const [CheckBoxValue, setCheckBoxValue] = useState(false)

  useEffect(() => {
    setData({ ...data, degree: CheckBoxValue })
  }, [CheckBoxValue])

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
        Title={'Tell us about your education:'}
        Property="education"
        data={data}
        navigateTo={AddExperience}
        elements={
          <>
            {/* <Select1
              SelectSemiTitle={"education's"}
              array={selectArray}
              setData={(value) => setData({ ...data, profession: value })}
              height="20"
              placeholder="profession"
              border="2"
              rounded_border="lg"
            /> */}
            <Input
              setData={(value) => setData({ ...data, location: value })}
              height="20"
              placeholder="where did you study?"
              border="2"
              rounded_border="lg"
            />

            {/* <Input
              setData={(value) => setData({ ...data, time: value })}
              height="20"
              placeholder="time in months"
              border="2"
              rounded_border="lg"
              type="number-pad"
            /> */}
            <View style={tw`flex-row justify-around`}>
              <CheckBox
                value={CheckBoxValue}
                onValueChange={(newValue) => {
                  setCheckBoxValue(newValue)
                }}
              />
              <Text>Do you have a degree from a college or university?</Text>
            </View>
          </>
        }
      />
    </View>
  )
}

export default AddEducation
