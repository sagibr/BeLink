import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from '../../utils/config/tailwindConf'

const InputTime = ({ tech, setData, data, isPress }) => {
  const [input, setInput] = useState('')
  console.log(input)
  
  useEffect(() => {
    if(isPress){
      const techChose={tech: tech, text: input}
      console.log("techChose= ",techChose);
      setData((data)=>[...data, techChose])
      console.log(data);

    }
  }, [isPress])
  
  return (
    <View style={tw`w-full h-1/3 flex-row`}>
      <View>
        <Text style={tw`flex-1`}>{tech}</Text>
      </View>
      <View style={tw`flex-2`}>
        <TextInput
          keyboardType="number-pad"
          onChangeText={(text) => {
            setInput(text)
          }}
        />
      </View>
    </View>
  )
}

export default InputTime
