import axios from "axios";

const BASE_URL = "http://localhost:4000/";

// const user =JSON.parse(localStorage?.getItem('user'))
// const TOKEN = user?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });