import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { CheckBox } from '@react-native-community/checkbox'
import tw from '../../utils/config/tailwindConf'

const Select = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.array[0])
  const [isSelected, setSelection] = useState(false)
  return (
    <View style={styles.container}>
      <View style={[styles.container]}>
        <Picker
          selectedValue={selectedValue}
          dropdownIconColor="white"
          style={{ width: 300, height: 50 }}
          onValueChange={(newValue) => {
            setSelectedValue(newValue)
            props.setData(newValue)
          }}
        >
          {props.array.map((e, i) => {
            return (
              <Picker.Item
                label={e}
                value={e}
                key={i}
                style={tw`bg-background text-white`}
              />
            )
          })}
        </Picker>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
})

export default Select
