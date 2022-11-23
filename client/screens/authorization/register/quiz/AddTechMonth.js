import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UIButton from "../../../../components/basic/UIButton";
import { updateUser } from "../../../../utils/redux/slices/userSlice";
import tw from "../../../../utils/config/tailwindConf";
const AddTechMonth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const data = [];
  const [tech, setTech] = useState(
    useSelector((state) => state.user.value.tech)
  );

  useEffect(() => {
    dispatch(updateUser({ property: "tech", value: tech }));
    console.log(tech);
    console.log(user);
  }, [tech]);

  const handleClick = () => {
    let newTech = [];
    for (let index = 0; index < tech.length; index++) {
      newTech.push(setNewData(index));
    }
    setTech(newTech);
    dispatch(updateUser({ property: "tech", value: tech }));
  };

  const setNewData = (index) => {
    return { ...tech[index], time: data[index] };
  };

  const handleChange = (newText) => {
    data.push(newText);
  };

  return (
    <View>
      <Text>HOW LONG DID YOU WORK</Text>
      {tech.map((item, index) => (
        <View key={index}>
          <TextInput
            placeholder={tech[index].id}
            keyboardType="number-pad"
            onChangeText={(newText) => {
              handleChange(newText);
            }}
          ></TextInput>
        </View>
      ))}
      <Button onPress={() => handleClick()} title="Submit"></Button>
      {/* <UIButton onPress={() => handleClick()}>Submit</UIButton> */}
    </View>
    // <View>hello</View>
  );
};

export default AddTechMonth;
