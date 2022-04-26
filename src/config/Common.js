// return the user data from the session storage
import axios from "axios";

export const getUser = () => {
    const userStr = sessionStorage.getItem('auth');
    if (userStr){
      const user = JSON.parse(userStr);
      return user.user;
    }else {
      return null
    }
  }
export const getUserExtraPermission = () => {
  const userStr = sessionStorage.getItem('auth');
  if (userStr){
    const user = JSON.parse(userStr);
    return user.user.extraPermission;
  }else {
    return null
  }
}
export const getUserPerMissions = () => {
  const userStr = sessionStorage.getItem('auth');
  if (userStr){
    let checkBox = '';
    const user = JSON.parse(userStr);
    let role =user.user.user.roles;
    const dd  =role.map((v,i)=>role = v.permissions)
    dd.map((r,n)=>{
      checkBox= [... r].map((z,r) => {return z.name})
    });
    return checkBox;
  }else {
    return null;
  }
}
export const getUserRole = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr){
    const user = JSON.parse(userStr);
    return user.roles;
  }else {
    return null;
  }
}
  // return the token from the session storage
  export const getToken = () => {
    const userStr = sessionStorage.getItem('auth');
    if (userStr){
      return  JSON.parse(userStr);
    }else {
      return null;
    }
  }

  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('auth');
  }

  // set the token and user from the session storage
  export const setUserSession = (token, user, response) => {
    console.log('insdide')
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('auth', JSON.stringify(response));
  }
