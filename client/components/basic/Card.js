// import { MaterialCommunityIcons } from '@expo/vector-icons'
// import React from 'react'
// import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native'
// import tw from '../../utils/config/tailwindConf'
// import { ACTION_OFFSET, VERTICAL_MARGIN } from '../../utils/constants-swiper'
// import Choice from './Choice'

// const Card = ({ isFirst, user, swipe, tiltSign, index, ...rest }) => {
//   const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
//     inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
//     outputRange: ['8deg', '0deg', '-8deg'],
//   })

//   const likeOpacity = swipe.x.interpolate({
//     inputRange: [10, ACTION_OFFSET],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   })

//   const nopeOpacity = swipe.x.interpolate({
//     inputRange: [-ACTION_OFFSET, -10],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   })

//   const animatedCardStyle = {
//     transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
//   }
//   const Zindex = 1000 - index
//   return (
//     <Animated.View
//       style={[
//         tw` absolute top-10 left-10 z-${Zindex} h-80% w-80%  `,
//         isFirst && animatedCardStyle,
//       ]}
//       {...rest}
//     >
//       <Image style={tw`w-full h-full rounded-lg`} source={{ uri: user.image }} />

//       <View
//         style={tw`absolute bottom-0 bg-white w-full h-20 flex-row justify-center justify-between rounded-b-md items-center content-center px-6 py-2 bg-opacity-10`}
//       >
//         <View>
//           <Text style={tw` text-xl font-semibold text-white`}>{user.username}</Text>
//           <Text style={tw`text-white`}>{user.profession}</Text>
//         </View>
//         <View
//           style={tw`w-10 h-10 border-2 border-primary rounded-full justify-center items-center content-center `}
//         >
//           {/* <Text style={tw`text-xl font-bold text-white`}>{user.grade}</Text> */}
//           <MaterialCommunityIcons name="information-variant" size={24} color="white" />
//         </View>
//       </View>

//       {isFirst && (
//         <>
//           <Animated.View
//             style={[tw`absolute top-15 right-20 `, { opacity: likeOpacity }]}
//           >
//             <Choice type={'like'} />
//           </Animated.View>

//           <Animated.View style={[tw`absolute top-15 left-20 `, { opacity: nopeOpacity }]}>
//             <Choice type={'nope'} />
//           </Animated.View>
//         </>
//       )}
//     </Animated.View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: `${VERTICAL_MARGIN}px`,
//     zIndex: 10,
//   },
// })

// export default Card

import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from '../../utils/config/tailwindConf'

function Card({ user, style }) {
  return user ? (
    <View style={tw`w-full h-full`}>
      <Image style={tw`w-full h-3/4`} source={user.image} />
      <View style={tw`w-full h-1/4`}>
        <View>
          <Text>{user.username}</Text>
          <Text>{user.profession}</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="information-variant" size={24} color="white" />
        </View>
      </View>
    </View>
  ) : (
    <></>
  )
}

export default Card
