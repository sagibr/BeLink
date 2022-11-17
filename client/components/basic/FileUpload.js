import React from 'react'
import { Pressable, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import tw from '../../utils/config/tailwindConf'
import axios from 'axios'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const FileUpload = (props) => {
  const [image, setImage] = useState(null)

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', process.env.CLOUDNERY_SEC)
    console.log(formData)

    axios
      .post('https://api.cloudinary.com/v1_1/dxexnhjmi/image/upload', formData)
      .then((res) => {
        setProduct({ ...product, img: res.data.secure_url })
      })
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      uploadImage()
    }
  }

  return (
    <Pressable
      style={tw` h-1/3 w-1/3 border-2 rounded-xl border-primary flex items-center`}
      onPress={pickImage}
    >
      <AntDesign
        name="camerao"
        size={50}
        color={'#3b82f6'}
        style={tw`item-center absolute bottom-30% right-30%`}
        onPress={props.onPress}
      />
      <AntDesign
        name="pluscircle"
        size={20}
        color={'#3b82f6'}
        style={tw`item-center absolute bottom-24% right-25%`}
        onPress={props.onPress}
      />
    </Pressable>
  )
}

export default FileUpload

/*
The FileUpload is customizable by props. the props you can send to customize it are:

  color - the color of the new icon (all the three included) you need to write only the name of the color (without tailwind, like: black,blue,red,green)
  size - you can controle the size with change the number of the size. you need to write only the number like: 50,80,100
  padding - the padding of the icon (tailwind padding numbers: 0,1,2,3,4,5,6 etc...)
  margin - the margin of the icon (tailwind margin numbers: 0,1,2,3,4,5,6 etc...)
*/
