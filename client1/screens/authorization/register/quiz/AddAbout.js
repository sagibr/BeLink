import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
import AddEducation from './AddEducation'
import AddExperience from './AddExperience'

const AddAbout = () => {
  const [data, setData] = useState({
    text: '',
    links: '',
  })
  return (
    <View style={tw`w-full h-full`}>
      <QuizTemplate
        Title={'Tell us about yourself'}
        Property="about"
        data={data}
        navigateTo={AddEducation}
        elements={
          <>
            <Input
              setData={(e) => setData({ ...data, text: e })}
              height="15"
              placeholder="My self-Summary:"
              border="2"
              rounded_border="lg"
            />
            {/* <Input
              setData={(e) => setData({ ...data, links: e })}
              height="20"
              placeholder="links"
              border="2"
              rounded_border="lg"
            /> */}
          </>
        }
      />
    </View>
  )
}

export default AddAbout
