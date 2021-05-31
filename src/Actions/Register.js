import {
  CHARGING,
  ERROR,
  SUCCESS,
  REGISTERUSER,
  EMAILCHECK,
  RESETVAULES
  
} from "../Types/Register";


import {
  AUTHVALUE
  
} from "../Types/Login";


import {URL} from '../../src/General/url'


function loadingRequest() {
  return { type: CHARGING };
}
function registerSuccess(payload) {
  return { type: SUCCESS, payload };
}
function registerError(payload) {
  return { type: ERROR, payload };
}
function  registerRegister(payload) {
  return { type: REGISTERUSER, payload };
}
function  registerEmailcheck(payload) {
  return { type: EMAILCHECK, payload };
}
function  registerReset() {
  return { type: RESETVAULES };
}

function  loginAuth(payload) {
  return { type: AUTHVALUE, payload };
}


function registerUser(data) {
  return async function thunk(dispatch) {
    dispatch(loadingRequest());

    fetch(`${URL}user/create`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error =>  dispatch(registerError(error)))
    .then(response => {
      if(response.status==="ok"){

        window.localStorage.setItem('token',response.token)
        window.localStorage.setItem('user_info',response.user_info)
        window.localStorage.setItem('user_email',response.user_email)
        dispatch(loginAuth(true))
      }else{
        dispatch(registerError(response.error))
      }
    })
    
 /*    try {

   
     console.log()

    } catch (error) {
     
    } */
  };
}


function checkEmail(data) {
  return async function thunk(dispatch) {
    dispatch(loadingRequest());

    fetch(`${URL}user/emailCheck`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error =>  dispatch(registerError(error)))
    .then(response =>   dispatch(registerEmailcheck(response.data)));

  };
}

export {
  loadingRequest,
  checkEmail,
  registerSuccess,
  registerError,
  registerRegister,
  registerUser,
  registerReset
};
