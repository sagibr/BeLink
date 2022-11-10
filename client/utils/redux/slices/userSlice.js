import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName } = userSlice.actions

export default userSlice.reducer
