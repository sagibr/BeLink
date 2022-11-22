import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    name: '',
    email: '',
    password: '',
    profession: [''],
    image: '',
    about: [
      {
        text: '',
        links: '',
      },
    ],
    education: [
      {
        location: '',
        time: 0,
        profession: '',
        degree: false,
      },
    ],
    experience: [
      {
        location: '',
        time: 0,
        role: '',
      },
    ],

    tech: [
      {
        item: '',
        id: '',
        time: 0,
      },
    ],
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("redux action",action);
      state.value[action.payload.property] = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, updateTime } = userSlice.actions

export default userSlice.reducer
