import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:3000',
    withCredentials: false,
    headers:{
      Accept: "appliction/json",
      "Content-Type": "appliction/json"
    }
  })
}
