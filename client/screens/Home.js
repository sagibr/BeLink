import React from "react";
import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import SwiperComp from "../components/basic/SwiperComp";
import Swiper from "../components/basic/SwiperComp";
import BottomNavBar from "../components/templates/BottomNavBar";
import NavBar from "../components/templates/NavBar";
import tw from "../utils/config/tailwindConf";
import { Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={tw` w-full h-full bg-primary `}>
      {/* Logo */}
      <View style={tw`flex-3 pt-8 flex items-center justify-center`}>
        <Image
          style={tw`w-full h-full rounded-lg`}
          source={require("../assets/quiz-image/logo.png")}
        />
        <Text variant="displayLarge" style={tw`text-white text-2xl`}>Let's start making circles</Text>

      </View>

      {/* Button */}
      <View style={tw`flex-8 flex items-center justify-center `}>
      
        <Button
        style={tw` p-10 w-60 h-60 rounded-full bg-white text-primary flex items-center justify-center`}
          labelStyle={{color: '#3b82f6'}}
          mode="contained"
          onPress={() => navigation.navigate('ListMatch')}
        >
          Press me
        </Button>
        <Text variant="displayLarge" style={tw`text-white pt-10 text-text-lg`}>Click the button to activate the algorithm to start connecting</Text>
      </View>

      {/* botoom NAVBAR */}
      <View style={tw`flex-1 `}>
        <BottomNavBar />
      </View>
    </View>
  );
};

export default Home;
