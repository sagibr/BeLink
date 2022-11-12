import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, PanResponder, Text, View } from 'react-native'
import Card from './Card'
import { usersMatch as data } from '../../utils/Fake_data'
import tw from '../../utils/config/tailwindConf'
import { ACTION_OFFSET, CARD } from '../../utils/constants-swiper'

const Swiper = () => {

  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current
  const [usersMatch, setUsersMatch] = useState(data)

  useEffect(() => {
    if (usersMatch.length === 0) {
      setUsersMatch(data)
    }
  }, [usersMatch])

  const transitionNext = useCallback(() => {
    setUsersMatch((prevState) => prevState.slice(1))
    swipe.setValue({ x: 0, y: 0 })
  }, [swipe])
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, { dx, dy, y0 }) => {
        tiltSign.setValue(y0 > CARD.CARD_HEIGHT / 2 ? 1 : -1)
        swipe.setValue({ x: dx, y: dy })
      },
      onPanResponderRelease: (e, { dx, dy }) => {
        const direction = Math.sign(dx)
        const userAction = Math.abs(dx) > ACTION_OFFSET

        if (userAction) {
          Animated.timing(swipe, {
            duration: 200,
            toValue: {
              x: direction * CARD.CARD_OUT_WIDTH,
              y: dy,
            },
            useNativeDriver: true,
          }).start(transitionNext)
        } else {
          Animated.spring(swipe, {
            friction: 5,
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }).start()
        }
      },
    })
  ).current

  return (
    <View style={tw` h-3/4 w-full `}>
      {usersMatch.map((user, index) => {
        const isFirst = index == 0
        const panHandlers = isFirst ? panResponder.panHandlers : {}

        return (
          <Card
            key={index}
            user={user}
            isFirst={isFirst}
            swipe={swipe}
            tiltSign={tiltSign}
            {...panHandlers}
          />
        )
      })}
    </View>
  )
}

export default Swiper
