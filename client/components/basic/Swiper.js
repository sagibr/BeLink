// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { Animated, PanResponder, Text, View } from 'react-native'
// import { useSelector } from 'react-redux'
// import tw from '../../utils/config/tailwindConf'
// import { ACTION_OFFSET, CARD } from '../../utils/constants-swiper'
// import { usersMatch as data } from '../../utils/Fake_data'
// import { userRequest } from '../../utils/requestMethods'
// import Card from './Card'
// const Swiper = () => {
//   const swipe = useRef(new Animated.ValueXY()).current
//   const tiltSign = useRef(new Animated.Value(1)).current
//   const [usersMatch, setUsersMatch] = useState(data)
//   const user = useSelector((state) => state.currentUser.currentUser)
//   const [swiped, setSwiped] = useState(0)

//   const fetchUsers = () => {
//     const userReq = userRequest(user.accessToken)
//     userReq('match/generate').then((res) => setUsersMatch(res.data))
//   }
//   const swipedRight = (userId) => {
//     const userReq = userRequest(user.accessToken)
//     userReq('match/swipedRight', { matchId: userId }).then((res) => console.log(res.data))
//   }
//   useEffect(() => {
//     fetchUsers()
//   }, [])
//   useEffect(() => {
//     if (usersMatch.length === 0) {
//       fetchUsers()
//     }
//   }, [usersMatch])
//   useEffect(() => {
//     console.log(usersMatch[0])
//   }, [swiped])
//   const transitionNext = useCallback(
//     (swiped) => {
//       if (swipe.x._value > 0) {
//         console.log('swiped right ' + swiped)
//         setSwiped(swiped + 1)
//         // swipedRight(user.id)
//       } else {
//         console.log('dislike')
//       }
//       setUsersMatch((prevState) => prevState.slice(1))
//       console.log(swipe.x)
//       swipe.setValue({ x: 0, y: 0 })
//       // console.log('swiped')
//     },
//     [swipe]
//   )
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (e, { dx, dy, y0 }) => {
//         tiltSign.setValue(y0 > CARD.CARD_HEIGHT / 2 ? 1 : -1)
//         swipe.setValue({ x: dx, y: dy })
//       },
//       onPanResponderRelease: (e, { dx, dy }) => {
//         const direction = Math.sign(dx)
//         const userAction = Math.abs(dx) > ACTION_OFFSET

//         if (userAction) {
//           Animated.timing(swipe, {
//             duration: 200,
//             toValue: {
//               x: direction * CARD.CARD_OUT_WIDTH,
//               y: dy,
//             },
//             useNativeDriver: true,
//           }).start(() => transitionNext(swiped))
//         } else {
//           Animated.spring(swipe, {
//             friction: 5,
//             toValue: {
//               x: 0,
//               y: 0,
//             },
//             useNativeDriver: true,
//           }).start()
//         }
//       },
//     })
//   ).current

//   return (
//     <View style={tw` h-full w-full `}>
//       {usersMatch.map((user, index) => {
//         const isFirst = index == 0
//         const panHandlers = isFirst ? panResponder.panHandlers : {}

//         return (
//           <Card
//             key={index}
//             user={user}
//             isFirst={isFirst}
//             swipe={swipe}
//             tiltSign={tiltSign}
//             index={index}
//             {...panHandlers}
//           />
//         )
//       })}
//     </View>
//   )
// }

// export default Swiper

import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CardsSwipe from 'react-native-cards-swipe'
import { useSelector } from 'react-redux'
import { userRequest } from '../../utils/requestMethods'
import Card from './Card'

function Swiper() {
  const user = useSelector((state) => state.currentUser.currentUser)
  const [cardsData, setCardsData] = useState([])

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
  useEffect(() => {
    if (cardsData.length === 0) {
      fetchUsers()
    }
  }, [cardsData])

  return (
    <View style={styles.container}>
      <CardsSwipe
        cards={cardsData}
        cardContainerStyle={styles.cardContainer}
        onSwipedRight={(index) => {
          swipedRight(cardsData[index].id)
        }}
        renderCard={(card) => <Card style={styles.card} user={card}></Card>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '92%',
    height: '70%',
  },
  card: {
    width: '100%',
    height: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3.3,
    backgroundColor: 'white',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
})
export default Swiper
