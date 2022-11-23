import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Card,
  IconButton,
  TouchableRipple,
  MD3Colors
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tw from "../../utils/config/tailwindConf";
import { useSelector } from "react-redux";

const RowComponent = ({ user }) => {
  const myUser = useSelector((state) => state.currentUser.currentUser);
  const [isPress, setIsPress] = useState(false);

  const navigation = useNavigation();

  const handleNavigation = () => {
    console.log("click Inform");
    navigation.navigate("Profile", {
      user: user,
    });
  };

  // const swipedRight = async (userId) => {
  //   const userReq = userRequest(myUser.accessToken);
  //   const res = await userReq.patch("match/swipedRight", {matchId: user.id})
  //   cardsData.shift();
  //   setCardsData([...cardsData]);
  // };

  return (
    <>
      <TouchableRipple
        style={tw`w-full h-1/6 bg-white`}
        onPress={() => {
          setIsPress(!isPress);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={tw` flex-row p-5 flex-1`}>
          <View style={tw` flex-2 flex items-center`}>
            <Avatar.Image size={100} source={{ uri: user.image }} />
          </View>
          <View style={tw` flex-3 flex justify-center content-center`}>
            <Text style={tw`font-bold font xl`}>{user.name}</Text>
            <Text style={tw`pt-1`}>{user.profession}</Text>
            <Text style={tw`pt-1`}>{user.about}</Text>
          </View>
          <View style={tw` flex-1 flex content-center justify-center`}>
            <View
              style={tw`w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center content-center `}
            >
              <IconButton
                icon="information-variant"

                size={20}
                onPress={handleNavigation}
              />
            </View>
          </View>
        </View>
      </TouchableRipple>
      {isPress ? (
        <Card>
          <Card.Actions
            style={tw`flex justify-center items-center content-center flex-row justify-around`}
          >
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={tw`bg-red-500`}
            >
              No match
            </Button>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={tw`bg-green-500`}
            >
              Lets start!
            </Button>
          </Card.Actions>
        </Card>
      ) : null}
    </>
  );
};

export default RowComponent;
