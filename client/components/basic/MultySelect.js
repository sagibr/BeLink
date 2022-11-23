import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

// Options data must contain 'item' & 'id' keys

const MultySelect = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);
  useEffect(() => {
    props.setData(selectedValue);
    console.log(selectedValue);
    console.log(props.data);
  }, [selectedValue]);
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>
          {props.SelectTitle}
        </Text>
      </View>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>
        {props.SelectSemiTitle}
      </Text>
      <SelectBox
        label="Select multiple"
        options={props.array}
        selectedValues={selectedValue}
        onMultiSelect={(newValue) => {
          console.log(newValue);
          setSelectedValue([...selectedValue, newValue]);
        }}
        isMulti
      />
    </View>
  );
};

export default MultySelect;
