import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Input from '../../../../components/basic/Input'
import MultySelect from '../../../../components/basic/MultySelect'
import Select from '../../../../components/basic/Select'
import Select1 from '../../../../components/basic/Select1'
import UIButton from '../../../../components/basic/UIButton'
import QuizTemplate from '../../../../components/templates/QuizTemplate'
import tw from '../../../../utils/config/tailwindConf'
import AddTechMonth from './AddTechMonth'
import AddTime from './AddTime'

const AddExtraKnowledge = () => {
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
        Title={'What is your technological knowledge?'}
        Property="tech"
        data={data}
        navigateTo={AddTime}
        elements={

          <MultySelect
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
        // elements={
        //   <>
        //     <View style={tw`w-full h-12 bg-gray-300 rounded-full `}>
        //       {selectArray.map((item, inde) => {
        //         return <View></View>
        //       })}
        //     </View>

        //     {inputData.map((item, index) => {
        //       return (
        //         <View key={index}>
        //           <Select1
        //             array={selectArray}
        //             setData={(e) => {
        //               const newInputData = inputData
        //               newInputData[index].tech = e
        //               setInputData([...newInputData])
        //             }}
        //             height="20"
        //             placeholder={inputData[index].tech}
        //             border="2"
        //             rounded_border="lg"
        //           />
        //           <Input
        //             setData={(e) => {
        //               const newInputData = inputData
        //               newInputData[index].time = e
        //               setInputData([...newInputData])
        //             }}
        //             height="20"
        //             placeholder={item.time.toString()}
        //             border="2"
        //             rounded_border="lg"
        //           />
        //         </View>
        //       )
        //     })}
        //     <UIButton
        //       onPress={() => {
        //         setInputData([...inputData, { tech: '', time: 0 }])
        //       }}
        //       padding="1"
        //       color="secondary"
        //       text="add tech"
        //       textColor="red-700"
        //       textSize="2xl"
        //       rounded="3xl"
        //     />
        //   </>
        // }
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
