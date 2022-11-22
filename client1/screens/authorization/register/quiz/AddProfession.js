import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import Select1 from '../../../../components/basic/Select1'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'

const AddProfession = () => {
  const [data, setData] = useState({})

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
        Title={"I'm looking for:"}
        Property="profession"
        data={data}
        navigateTo={'AddImage'}
        elements={
          <Select1
            SelectSemiTitle={"proffesion's"}
            SelectTitle={"Add you'r proffesion"}
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
