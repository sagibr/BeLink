import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import './axios.config.js'
import StackNavigator from './StackNavigator'
import { store } from './utils/redux/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}
