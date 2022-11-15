import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { CheckBox } from '@react-native-community/checkbox'
import tw from '../../utils/config/tailwindConf'

const Select = (propsprops) => {
  const [selectedValue, setSelectedValue] = useState(props.array[0])
  const [isSelected, setSelection] = useState(false)
  return (
    <View style={styles.container}>
      <View
        style={tw`rounded-lg border-0 border-background bg-background w-36 h-14 flex items-center justify-center`}
      >
        <Picker
          selectedValue={selectedValue}
          dropdownIconColor="white"
          style={tw`bg-background w-34 h-10 rounded-lg text-white`}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          onChange={(e) => {
            props.setData(e.target.value)
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
      {/* <View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View> */}
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
