import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import tw from "../../utils/config/tailwindConf";
import { userRequest } from "../../utils/requestMethods";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import { AntDesign, Entypo } from "@expo/vector-icons";
import NoMaches from "../../screens/NoMaches";
import { useNavigation } from "@react-navigation/native";
function SwiperComp() {
  const usersMatch = [
    {
      email: "ronen@gmail.com",
      username: "Ronen1",
      profession: "Devloper",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY",
      about: "I have been a programmer for five years focusing on the back end",
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: "90%",
    },
    {
      email: "ronen@gmail.com",
      username: "Ronen2",
      profession: "Devloper",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY",
      about: "I have been a programmer for five years focusing on the back end",
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: "90%",
    },
    {
      email: "ronen@gmail.com",
      username: "Ronen3",
      profession: "Devloper",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY",
      about: "I have been a programmer for five years focusing on the back end",
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: "90%",
    },
  ];
  const user = useSelector((state) => state.currentUser.currentUser);
  const swipeRef = useRef(null);
  const [cardsData, setCardsData] = useState([]);
  const [saveCardsData, setSaveCardsData] = useState([]);
  const [swipedAll, setSwipedAll] = useState(true);
  const navigation = useNavigation();
  const fetchUsers = () => {
    const userReq = userRequest(user.accessToken) || true;
    userReq("match/generate").then((res) => {
      setCardsData(res.data);
      setSaveCardsData(res.data);
      res.data.length == 0 ? setSwipedAll(true) : setSwipedAll(false);
    });
  };
  const swipedRight = (userId) => {
    const userReq = userRequest(user.accessToken);
    userReq
      .patch("match/swipedRight", {
        matchId: saveCardsData[userId]?.id,
      })
      .then((res) => res.data.match && navigation.navigate("Match"));
    cardsData.shift();
    setCardsData([...cardsData]);
  };
  console.log(cardsData);

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    if (cardsData.length === 0) {
      // fetchUsers()
      setSwipedAll(true);
    }
  }, [cardsData]);

  return (
    <SafeAreaView style={tw` flex-1 -mt-6`}>
      <View style={tw` flex-9`}>
        {swipedAll ? (
          <NoMaches />
        ) : (
          <Swiper
            ref={swipeRef}
            containerStyle={{ backgroundColor: "transparent" }}
            cards={cardsData}
            onSwipedAll={() => setSwipedAll(true)}
            stackSize={5}
            // cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            onSwipedRight={swipedRight}
            overlayLabels={{
              left: {
                title: "NOPE",
                style: {
                  label: {
                    textAlign: "right",
                    color: "red",
                  },
                },
              },
              right: {
                title: "MATCH",
                style: {
                  label: {
                    color: "#4DED30",
                  },
                },
              },
            }}
            renderCard={(user) => {
              return <Card user={user} />;
            }}
          ></Swiper>
        )}
      </View>
      {/* <View style={tw`flex-1 flex flex-row justify-evenly mt-2`}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

export default SwiperComp;
