import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import UIButton from '../../../../components/basic/UIButton'
import QuizTemplate from '../../../../components/templates/QuizTemplate'

const AddExtraKnowledge = () => {
  const [data, setData] = useState({})
  const [selectValue, setSelectValue] = useState('')
  const [inputData, setInputData] = useState([])
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

  useEffect(() => {
    console.log(inputData)
    const newData = {}
    for (const item of inputData) {
      newData[item.tech] = item.time
      setData({ ...newData })
    }
    console.log(data)
  }, [inputData])
  return (
    <View>
      <QuizTemplate
        Title={'Add expience'}
        Property="tech"
        data={data}
        navigateTo={AddExtraKnowledge}
        elements={
          <>
            {inputData.map((item, index) => {
              return (
                <View key={index}>
                  <Select
                    array={selectArray}
                    setData={(e) => {
                      const newInputData = inputData
                      newInputData[index].tech = e
                      setInputData([...newInputData])
                    }}
                    height="20"
                    placeholder={inputData[index].tech}
                    border="2"
                    rounded_border="lg"
                  />
                  <Input
                    setData={(e) => {
                      const newInputData = inputData
                      newInputData[index].time = e
                      setInputData([...newInputData])
                    }}
                    height="20"
                    placeholder={inputData[index].time}
                    border="2"
                    rounded_border="lg"
                  />
                </View>
              )
            })}
            <UIButton
              onPress={() => {
                setInputData([...inputData, { tech: '', time: 0 }])
              }}
              padding="1"
              color="secondary"
              text="add tech"
              textColor="red-700"
              textSize="2xl"
              rounded="3xl"
            />
          </>
        }
      />
    </View>
  )
}

export default AddExtraKnowledge

{
  // const technolagies = [{technolage:'nodejs',time:12},{technolage:'c#',time:6}]
  // tech={}
  // for (const item of technolagies) {
  //   user.tech[item.technolage] = item.time
  // }
  // tech={nodejs:12 , c#:6}
}
