import React from 'react'
import { View } from 'react-native'

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource

  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  )
}
export default ImageViewer
