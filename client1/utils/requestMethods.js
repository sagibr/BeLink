import axios from 'axios'
import { useSelector } from 'react-redux'

const BASE_URL = 'http://10.195.25.156:4000/'

// const user =JSON.parse(localStorage?.getItem('user'))
// const TOKEN = user?.accessToken;
// const user = useSelector((state) => state.currentUser.currentUser)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });