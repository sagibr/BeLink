import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InputTime from '../../../../components/basic/InputTime'

const AddTime = () => {
  const techs = useSelector((state) => state.user.value.tech)
  const [data, setData] = useState(null)
  console.log(data)
  console.log(techs)
  return (
    <View>
      {techs.map((tech, index) => {
        return <InputTime key={index} tech={tech.item} setData={setData} data={data} />
      })}
    </View>
  )
}

export default AddTime
