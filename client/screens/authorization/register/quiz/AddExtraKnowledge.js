import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import Select from '../../../../components/basic/Select'
import Skills from '../../../../components/basic/Skills'
import UIButton from '../../../../components/basic/UIButton'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'

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
    const newData = {}
    for (const item of inputData) {
      newData[item.tech] = item.time
      setData({ ...newData })
    }
  }, [inputData])
  return (
    <View>
      <QuizTemplate
        Title={'What is your technological knowledge?'}
        Property="tech"
        data={data}
        navigateTo={AddExtraKnowledge}
        elements={
          <>

          <View style={tw`w-full h-1/2 bg-gray-300 rounded-xl flex-wrap`}>
            {selectArray.map((item,index)=>{
              return(
                <Skills tech={item}/>
              )
            })}


          </View>

          
            {/* {inputData.map((item, index) => {
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
                    placeholder={item.time.toString()}
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
            /> */}
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
