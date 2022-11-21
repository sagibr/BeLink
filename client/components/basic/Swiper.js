import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CardsSwipe from 'react-native-cards-swipe'
import { useSelector } from 'react-redux'
import NoMaches from '../../screens/NoMaches'
import tw from '../../utils/config/tailwindConf'
import { userRequest } from '../../utils/requestMethods'
import Card from './Card'
import Choice from './Choice'

function Swiper() {
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
  const [cardsData, setCardsData] = useState([])
  const [right, setRight] = useState(false)
  const fetchUsers = () => {
    const userReq = userRequest(user.accessToken)
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

  useEffect(() => {
    fetchUsers()
  }, [])
  // useEffect(() => {
  //   if (cardsData.length === 0) {
  //     fetchUsers()
  //   }
  // }, [cardsData])

  return (
    <View style={tw` h-full w-full relative `}>
      <CardsSwipe
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
      />
    </View>
  )
}

export default Swiper
