import { View, Text, Image } from "react-native";
import React from "react";
import tw from "../utils/config/tailwindConf";

const NoMaches = () => {
  return (
    <View style={tw`text-1/2 flex m-top-70`}>
      <Text style={tw`text-2xl`}>No more people to match</Text>
      <Image
        style={tw`h-30 w-30 m-top-10 m-left-1/6`}
        source={require("../assets/cry.png")}
      ></Image>
    </View>
  );
};

export default NoMaches;
