import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import RecieverMessage from "../components/ChatClone/RecieverMessage";
import SenderMessage from "../components/ChatClone/SenderMessage";
import BottomNavBar from "../components/templates/BottomNavBar";
import NavBar from "../components/templates/NavBar";
import tw from "../utils/config/tailwindConf";
import { userRequest } from "../utils/requestMethods";
import socket from "../utils/socket/socket";

const MessageScreen = ({ route }) => {
  const { name, id, messages } = route.params;
  const [input, setInput] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const accessToken = useSelector(
    (state) => state.currentUser.currentUser
  ).accessToken;
  const user = useSelector((state) => state.currentUser.currentUser.user);

  useEffect(() => {
    socket.emit("join_room", id);
    let currentChat;
    console.log(user);
    for (const chat of user.chatList) {
      if (chat.roomId === id) {
        currentChat = chat;
      }
    }
    console.log(currentChat);
    setChatMessages([...currentChat.messages]);
  }, []);
  useEffect(() => {
    console.log("socket change");
    socket.on("receive_message", (message) => {
      setChatMessages((chatMessages) => [...chatMessages, message]);
    });
  }, [socket]);

  /*👇🏻 
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;
    const newMessage = {
      text: input,
      user: user.name,
      timestamp: { hour, mins },
    };
    setChatMessages((chatMessages) => [...chatMessages, newMessage]);
    if (user) {
      socket.emit("send_message", {
        text: input,
        user: user.name,
        timestamp: { hour, mins },
        room_id: id,
      });
      console.log(accessToken);
      const userReq = userRequest(accessToken);
      userReq.post(`/chat/message/${id}`, {
        text: input,
        user: user.name,
        timestamp: { hour, mins },
        room_id: id,
      });
    }
    console.log(newMessage);
  };

  return (
    <SafeAreaView style={tw`relative w-full h-full`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`flex-10 `}>
          {chatMessages.map((message, index) => {
            console.log(message.user);
            console.log(user);
            return message.user === user.name ? (
              <SenderMessage key={index} message={message} />
            ) : (
              <RecieverMessage key={index} message={message} />
            );
          })}
        </View>
      </TouchableWithoutFeedback>

      <View
        style={tw`absolute w-full bottom-0 flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder="send Message"
          onChangeText={setInput}
          value={input}
        />
        <Button title="send" color="#ff5864" onPress={handleNewMessage} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
