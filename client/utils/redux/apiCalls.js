import { publicRequest } from '../requestMethods'
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from './slices/userLoginSlice'

export const login = async (dispatch, user, setErrMsg) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure)
    setErrMsg('wrong email or password')
  }
}

export const register = async (dispatch, user) => {
  dispatch(registerStart())
  try {
    const res = await publicRequest.post('auth/register', user)
    dispatch(registerSuccess(res.data))
  } catch (error) {
    dispatch(registerFailure)
  }
}
