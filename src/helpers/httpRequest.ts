import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    // "Content-type": "multipart/form-data; boundary=<calculated when request is sent>"
    "Content-type": "application/x-www-form-urlencoded"
  }
});


// export const instance = axios.create({
//   baseURL: 'https://ecom-backend-example/api/v1',
//   timeout: 15000,
//   headers: {
//     // "Content-type": "multipart/form-data; boundary=<calculated when request is sent>"
//     "Content-type": "application/x-www-form-urlencoded"
//   }
// });