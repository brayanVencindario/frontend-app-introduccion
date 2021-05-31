import {
  CHARGING,
  ERROR,
  SUCCESS,
  RESETVAULES,
  AUTHVALUE
} from "../Types/Login";


import {URL} from '../../src/General/url'


function loadingRequest() {
  return { type: CHARGING };
}
function loginSuccess(payload) {
  return { type: SUCCESS, payload };
}
function loginError(payload) {
  return { type: ERROR, payload };
}
function  loginReset() {
  return { type: RESETVAULES };
}
function  loginAuth(payload) {
  return { type: AUTHVALUE, payload };
}

function loginUser(data) {
  return async function thunk(dispatch) {
    dispatch(loadingRequest());

    fetch(`${URL}user/login`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error =>  dispatch(loginError(error)))
    .then(response => {
      if(response.status==="ok"){

        window.localStorage.setItem('token',response.token)
        window.localStorage.setItem('user_info',response.user_info)
        window.localStorage.setItem('user_email',response.user_email)
        dispatch(loginAuth(true))
      }else{
        dispatch(loginError(response.error))
      }
    })
    

  };
}

function logAuth() {
  return async function thunk(dispatch) {
    dispatch(loginAuth(false))
        window.localStorage.setItem('token',"")
        window.localStorage.setItem('user_info',"")
        window.localStorage.setItem('user_email',"")

  };
}

function tokenVerify(data) {
  return async function thunk(dispatch) {


    fetch(`${URL}user/tokenVerify`, {
      method: 'GET', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem("token")}`
      }
    }).then(res => res.json())
    .catch(error =>  dispatch(loginError(error)))
    .then(response => {
      if(response.status==="ok"){
   
        dispatch(loginAuth(true))
      }else{
        dispatch(loginAuth(false))
        window.localStorage.setItem('token',"")
        window.localStorage.setItem('user_info',"")
        window.localStorage.setItem('user_email',"")
      }
    })
    

  };
}



export {
  loadingRequest,
  loginUser,
  loginSuccess,
  loginError,
  loginReset,
  tokenVerify,
  logAuth

};
