import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ChatRow from "../components/ChatClone/ChatRow";
import { useSelector } from "react-redux";
import tw from "../utils/config/tailwindConf";
import NavBar from "../components/templates/NavBar";
import BottomNavBar from "../components/templates/BottomNavBar";
const ChatScreen = () => {
  const [rooms, setRooms] = useState([]);

  const user = useSelector((state) => state.currentUser.currentUser?.user);
  useEffect(() => {
    setRooms(user.chatList);
  }, []);

  return (
    <View style={tw` w-full h-full `}>
      {/* NAVBAR */}
      <View style={tw`flex-1 `}>
        <NavBar />
      </View>

      <View style={tw`flex-10 `}>
        {rooms.length > 0 ? (
          rooms.map((item, index) => {
            console.log(item);
            return <ChatRow key={index} item={item} />;
          })
        ) : (
          <View>
            <Text>No Match, continue swipe!</Text>
          </View>
        )}
      </View>
      {/* botoom NAVBAR */}
      <View style={tw`flex-1 `}>
        <BottomNavBar />
      </View>
    </View>
  );
};

export default ChatScreen;
