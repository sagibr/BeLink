import React from "react";
import { Image, Text, View } from "react-native";
import Skills from "../components/basic/Skills";
import tw from "../utils/config/tailwindConf";
import { Linking } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const MyProfile = () => {
  const user = useSelector((state) => state.currentUser.currentUser).user;
  console.log("name", user.name);
  return (
    user != null && (
      <View style={tw`h-full w-full p-5`}>
        <View style={tw`h-full w-full rounded shadow-lg bg-white`}>
          {/* image */}
          <View style={tw` flex-1 m-top-5`}>
            <Image
              style={tw` w-50 h-50 rounded-full m-left-1/4 `}
              source={{ uri: user.image }}
            />
          </View>

          <View style={tw` flex-3 `}>
            {/* details */}
            <View style={tw` flex-1 m-top-1`}>
              <View>
                <Text
                  style={tw`text-gray-900 font-bold text-3xl mb-2 m-top-7 text-center`}
                >
                  {user.name}
                </Text>
              </View>
              <View style={tw`flex-row justify-center m-top-6`}>
                <MaterialCommunityIcons
                  name="professional-hexagon"
                  size={24}
                  color="black"
                />
                <Text style={tw`text-gray-700 text-base`}>
                  {user.profession}
                </Text>
                <Text style={tw`text-gray-700 text-base`}>
                  {user?.education && ", " + user?.education[0]?.location}
                </Text>
              </View>
            </View>
            {/* line */}
            <View style={tw`my-3 h-px bg-gray-300 border-0 dark:bg-gray-700`} />

            {/* langauge */}
            <Text style={tw`text-gray-900 font-bold text-xl mb-2 text-center`}>
              Technology:
            </Text>
            <View style={tw`flex flex-2 flex-row flex-wrap flex-start`}>
              {user?.tech &&
                Object.keys(user?.tech).map((tech, index) => {
                  return <Skills key={index} tech={tech} />;
                })}
            </View>
            <View style={tw`flex-row justify-center`}>
              <FontAwesome name="book" size={24} color="black" />
              <Text
                style={tw`text-gray-900 font-bold text-xl mb-2 text-center`}
              >
                Education:
              </Text>
            </View>
            <Text style={tw`text-center`}>
              {user?.education && user?.education[0]?.location}
            </Text>
            {/* line */}
            <View style={tw`my-2 h-px bg-gray-300 border-0 dark:bg-gray-700`} />

            {/* about */}
            <View style={tw` flex-1.5 `}>
              <Text style={tw`text-gray-900 font-bold text-xl text-center`}>
                About me:{" "}
              </Text>
              <Text style={tw`m-left-5 m-right-5 m-top-5 w-90%`}>
                {user?.about}{" "}
              </Text>
            </View>

            {/* links */}
            {/* <View style={tw`flex-row flex-0.5 justify-center items-center justify-around `}>
          <Entypo
            name="linkedin-with-circle"
            size={24}
            color="blue"
            onPress={() => Linking.openURL('http://linkedin.com')}
          />

          <AntDesign
            name="github"
            size={24}
            color="black"
            onPress={() => Linking.openURL('http://github.com')}
          />
        </View> */}
          </View>
        </View>
      </View>
    )
  );
};

export default MyProfile;
