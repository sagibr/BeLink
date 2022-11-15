import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import UIButton from '../../../../components/basic/UIButton'
const AddLabeling = () => {
  const navigation = useNavigation()
  return (
    <View>
      <UIButton
        padding="5"
        color="secondary"
        text="work"
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
        onPress={() => navigation.navigate('AddProfession')}
      />

      <UIButton
        padding="5"
        color="secondary"
        text="company   "
        textColor="red-700"
        textSize="2xl"
        rounded="3xl"
        onPress={() => navigation.navigate('AddProfession')}
      />
    </View>
  )
}

export default AddLabeling
