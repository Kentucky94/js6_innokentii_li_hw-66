import axios from 'axios';

 const axiosAPI = axios.create({
  baseURL: 'https://js6-innokentii-li-blog-app.firebaseio.com/',
});

export default axiosAPI;