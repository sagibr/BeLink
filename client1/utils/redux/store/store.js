import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from '../slices/userLoginSlice'
import userReducer from '../slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentUser: userLoginSlice
  },
})
