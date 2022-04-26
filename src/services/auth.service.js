import axios from "axios";
import {removeUserSession, setUserSession} from '../config/Common'
const API_URL = "http://localhost:3000/api/auth/";

const register = (req) => {
  return axios.post(API_URL + "signup", {
    firstname: req.firstname,
    lastname: req.lastname,
    username: req.username,
    email: req.email,
    country: req.country,
    city: req.city,
    password: req.password
  });
};

const login = (req) => {
  return axios
    .post(API_URL + "signin", {
      email: req.email,
      password: req.password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        let {user,accessToken} =response.data;
        setUserSession(accessToken, user,response.data);
        //localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
