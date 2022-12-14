import React, { useState, useEffect } from 'react'
import { Button, Image, View, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function FileUpload(props) {
  const [image, setImage] = useState(null)
  // const [picture, setPicture] = useState('')
  const { setPicture } = props

  const pickImage = async () => {
    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!data.canceled) {
      let newFile = {
        uri: data.assets[0].uri,
        type: `DemoEmployee/${data.assets[0].uri.split('.')[1]}`,
        name: `DemoEmployee/${data.assets[0].uri.split('.')[1]}`,
      }
      const newData = new FormData()
      newData.append('file', newFile)
      newData.append('upload_preset', 'DemoEmployee')

      await fetch('https://api.cloudinary.com/v1_1/dhxv03kfs/image/upload', {
        method: 'post',
        body: newData,
      })
        .then((res) => res.json())
        .then((newData) => {
          setPicture(newData.url)
          setImage(newData.url)
        })
    }
  }

  // const handleUpload = async (image) => {
  //   const data = new FormData()
  //   data.append('file', image)
  //   data.append('upload_preset', 'DemoEmployee')

  //   await fetch('https://api.cloudinary.com/v1_1/dhxv03kfs/image/upload', {
  //     method: 'post',
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPicture(data.url)
  //     })
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  )
}