import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import UIButton from '../../../../components/basic/UIButton'
import { updateUser } from '../../../../utils/redux/slices/userSlice'
import tw from '../../../../utils/config/tailwindConf'
const AddTechMonth = () => {
  const [data, setData] = useState([])
  const [tech, setTech] = useState(useSelector((state) => state.user.value.tech))

  useEffect(() => {
    //   const tech = useSelector((state) => state.user.value.tech)
    console.log(tech)
  })

  //   const handleClick = () => {
  //     const newTech = [...tech]
  //     newTech.push({
  //       time: data,
  //     })
  //   }
  return (
    <View style={tw`w-full h-full`}>
      {tech.map((item, index) => (
        <View key={index}>
          <TextInput
            placeholder={tech[index].id}
            keyboardType="number-pad"
            onChangeText={(newText) => {
              setData(newText)
              console.log('Input data: ' + newText)
            }}
          ></TextInput>

          {/* <TextInput
          // style={[
          //   tw`rounded-${props.rounded_border} h-${props.height}  border-${props.border} border-gray-500 `,
          // ]}
          // onChangeText={(newText) => handleChange(item.id, newText)}
          // keyboardType={props.type}
          ></TextInput> */}
        </View>
      ))}
      <Button onPress={() => handleClick()}>hi</Button>
      {/* <UIButton onPress={handlePress}></UIButton> */}
    </View>
    // <View>hello</View>
  )
}

export default AddTechMonth
