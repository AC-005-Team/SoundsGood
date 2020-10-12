import axios from 'axios';

export default () => {

  return axios.create({
    baseURL: window.location.origin,
    withCredentials: true,
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      Accept: "appliction/json",
      "Content-Type": "appliction/json"
    }
  })
}
