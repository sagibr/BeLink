import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const Select1 = (props) => {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>{props.SelectTitle}</Text>
      </View>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>{props.SelectSemiTitle}</Text>
      <SelectBox
        label="Select single"
        options={props.array}
        value={selectedValue}
        onChange={(newValue) => {
          setSelectedValue(newValue)
          props.setData(newValue.item)
        }}
        hideInputFilter={false}
      />
    </View>
  )
}

export default Select1
