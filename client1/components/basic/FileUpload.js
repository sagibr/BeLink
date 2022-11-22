import React from 'react'
import { Pressable, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import tw from '../../utils/config/tailwindConf'
import axios from 'axios'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const FileUpload = (props) => {
  // const [image, setImage] = useState(null)
  const [imageLink, setImageLink] = useState(null)
  console.log(imageLink);

  const uploadImage = async(image) => {
    
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', "trackerApp")
    console.log(data);
    await axios.post('https://api.cloudinary.com/v1_1/dsk7a1p4y/image/upload', data)
      .then((res) => {
        setImageLink({img: res.data.secure_url })
      })
    
  }
  console.log();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri.split("data:")[1]);
      uploadImage(result.assets[0].uri.split("data:")[1])
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <Pressable
      style={tw` h-1/3 w-1/3 border-2 rounded-xl border-primary flex items-center`}
      onPress={pickImageAsync}
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
