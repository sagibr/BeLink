import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from '../../utils/config/tailwindConf'
import { userRequest } from '../../utils/requestMethods'
import Swiper from 'react-native-deck-swiper'
import Card from './Card'
import { AntDesign, Entypo } from '@expo/vector-icons'
function SwiperComp() {
  const usersMatch = [
    {
      email: 'ronen@gmail.com',
      username: 'Ronen1',
      profession: 'Devloper',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
      about: 'I have been a programmer for five years focusing on the back end',
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: '90%',
    },
    {
      email: 'ronen@gmail.com',
      username: 'Ronen2',
      profession: 'Devloper',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
      about: 'I have been a programmer for five years focusing on the back end',
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: '90%',
    },
    {
      email: 'ronen@gmail.com',
      username: 'Ronen3',
      profession: 'Devloper',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE1Jwbg59S_6A/profile-displayphoto-shrink_200_200/0/1516356309239?e=1671667200&v=beta&t=zWLcHdzbI61fY13I6aaNi0qYgsnoe3k6sYeQzgeDTbY',
      about: 'I have been a programmer for five years focusing on the back end',
      Likes: [],
      education: [],
      experience: [],
      tech: {},
      grade: '90%',
    },
  ]
  const user = useSelector((state) => state.currentUser.currentUser)
  const [showNope, setShowNope] = useState(false)
  const swipeRef = useRef(null)
  const [cardsData, setCardsData] = useState([])
  const [right, setRight] = useState(false)
  const fetchUsers = () => {
    const userReq = userRequest(user.accessToken) || true
    userReq('match/generate').then((res) => setCardsData(res.data))
  }
  const swipedRight = (userId) => {
    const userReq = userRequest(user.accessToken)
    userReq
      .patch('match/swipedRight', {
        matchId: userId,
      })
      .then((res) => console.log(res.data))
    cardsData.shift()
    setCardsData([...cardsData])
  }
  console.log(cardsData)

  useEffect(() => {
    fetchUsers()
  }, [])
  // useEffect(() => {
  //   if (cardsData.length === 0) {
  //     fetchUsers()
  //   }
  // }, [cardsData])

  return (
    <SafeAreaView style={tw` flex-1 -mt-6`}>
      <View style={tw` flex-9`}>
      <Swiper
        ref={swipeRef}
        containerStyle={{ backgroundColor: 'transparent' }}
        cards={cardsData}
        stackSize={5}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        onSwipedRight={swipedRight}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                textAlign: 'right',
                color: 'red',
              },
            },
          },
          right: {
            title: 'MATCH',
            style: {
              label: {
                color: '#4DED30',
              },
            },
          },
        }}
        renderCard={(user) => {
          return <Card user={user} />
        }}
      ></Swiper>

      </View>
      <View style={tw`flex-1 flex flex-row justify-evenly mt-2`}>
        <TouchableOpacity onPress={()=> swipeRef.current.swipeLeft()} style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}>
          <Entypo name='cross' size={24} color="red"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> swipeRef.current.swipeRight()} style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}>
          <AntDesign name='heart' size={24} color="green"/>
        </TouchableOpacity>
      </View>

      {/* <CardsSwipe
        cards={cardsData}
        renderYep={() => (
          <View style={[tw`absolute top-15 left-0 z-10`]}>
            <Choice type={'like'} />
          </View>
        )}
        renderNope={()=>
          (<View style={[tw`absolute top-15 left-20 `]}>
            <Choice type={'nope'} />
          </View>)
        }
        renderNoMoreCard={()=>{<NoMaches/>}}
        onSwipedRight={(index) => {
          swipedRight(cardsData[index].id)
        }}
        renderCard={(card) => <Card user={card} right={right} nope={showNope}></Card>}
      /> */}
    </SafeAreaView>
  )
}

export default SwiperComp
