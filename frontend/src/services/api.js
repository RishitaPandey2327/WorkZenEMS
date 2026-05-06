import axios from "axios";

export const API = axios.create({
 baseURL: "https://your-render-url.onrender.com/api"
});

API.interceptors.request.use((req)=>{
  const token = localStorage.getItem("token");
  if(token) req.headers.Authorization = token;
  return req;
});
