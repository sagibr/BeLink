import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Authorization from './screens/authorization/Authorization'
import Login from './screens/authorization/login/Login'
import AddAbout from './screens/authorization/register/quiz/AddAbout'
import AddEducation from './screens/authorization/register/quiz/AddEducation'
import AddEmail from './screens/authorization/register/quiz/AddEmail'
import AddExperience from './screens/authorization/register/quiz/AddExperience'
import AddExtraKnowledge from './screens/authorization/register/quiz/AddExtraKnowledge'
import AddImage from './screens/authorization/register/quiz/AddImage'
import AddLabeling from './screens/authorization/register/quiz/AddLabeling'
import AddName from './screens/authorization/register/quiz/AddName'
import AddPassword from './screens/authorization/register/quiz/AddPassword'
import AddProfession from './screens/authorization/register/quiz/AddProfession'
import AddTechMonth from './screens/authorization/register/quiz/AddTechMonth'
import AddTime from './screens/authorization/register/quiz/AddTime'
import FinshQuiz from './screens/authorization/register/quiz/FinshQuiz'
import Register from './screens/authorization/register/Register'
import ChatScreen from './screens/ChatScreen'
import Home from './screens/Home'
import MessageScreen from './screens/MessageScreen'
import MyProfile from './screens/MyProfile'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import Test from './screens/Test'
import Welcome from './screens/Welcome'
import { loginSuccess } from './utils/redux/slices/userLoginSlice'
import { publicRequest } from './utils/requestMethods'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.currentUser.currentUser)
  const [loading, setLoading] = useState(false)
  console.log(user)
  const test = false
  
  const refreshUser = async () => {
    try {
      const res = await publicRequest('/auth/refresh')
      dispatch(loginSuccess(res.data))
      setLoading(false)
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!user) {
      setLoading(false)
      // refreshUser()
    }
  }, [])
  return loading ? (
    <></>
  ) : (
    <Stack.Navigator>
      {test ? (
        <>
          <Stack.Screen name="Test" component={Test} />
        </>
      ) : user != null ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="Chats" component={ChatScreen} />
          <Stack.Screen name="Setting" component={Settings} />
          <Stack.Screen name="Message" component={MessageScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="FinshQuiz" component={FinshQuiz} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="AddEmail" component={AddEmail} />
          <Stack.Screen name="AddPassword" component={AddPassword} />
          <Stack.Screen name="AddLabeling" component={AddLabeling} />
          <Stack.Screen name="AddProfession" component={AddProfession} />
          <Stack.Screen name="AddImage" component={AddImage} />
          <Stack.Screen name="Authorization" component={Authorization} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="AddName" component={AddName} />
          <Stack.Screen name="AddExtraKnowledge" component={AddExtraKnowledge} />
          <Stack.Screen name="AddTechMonth" component={AddTechMonth} />
          <Stack.Screen name="AddExperience" component={AddExperience} />
          <Stack.Screen name="AddEducation" component={AddEducation} />
          <Stack.Screen name="AddAbout" component={AddAbout} />
          <Stack.Screen name="AddTime" component={AddTime} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator
