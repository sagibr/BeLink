import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
import Register from './screens/authorization/register/Register'
import ChatList from './screens/chat/ChatList'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Test from './screens/Test'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  const user = false
  const test = false
  return (
    <Stack.Navigator>
      {test ? (
        <>
          <Stack.Screen name="Test" component={Test} />
        </>
      ) : user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chats" component={ChatList} />
        </>
      ) : (
        <>
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="AddEmail" component={AddEmail} />
          <Stack.Screen name="AddPassword" component={AddPassword} />
          <Stack.Screen name="AddLabeling" component={AddLabeling} />
          <Stack.Screen name="AddProfession" component={AddProfession} />
          <Stack.Screen name="AddImage" component={AddImage} />
          <Stack.Screen name="Authorization" component={Authorization} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="AddName" component={AddName} />
          <Stack.Screen name="AddExtraKnowledge" component={AddExtraKnowledge} />
          <Stack.Screen name="AddExperience" component={AddExperience} />
          <Stack.Screen name="AddEducation" component={AddEducation} />
          <Stack.Screen name="AddAbout" component={AddAbout} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator
