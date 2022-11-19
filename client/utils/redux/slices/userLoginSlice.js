import { createSlice } from "@reduxjs/toolkit";
import { getUser, setDataUser } from "../../AsyncStorage";

const userLoginSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      storeUser(action.payload)
      console.log("loginSuccess", state.currentUser);
      // console.log(getUser());
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure  } = userLoginSlice.actions;
export default userLoginSlice.reducer;