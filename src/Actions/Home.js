import {
    CHARGING,
    ERROR,
    GETPROJECTS,
    MYPROJECTS,
    SUCCESS,
    RESETVAULES,
    PROJECTINFO,
    LEADSPROJECT,
    PROJECTSEARCH,
    MYPROJECTSEARCH
  } from "../Types/Home";
  
  
  import {URL} from '../../src/General/url'
  
  
  function loadingRequest() {
    return { type: CHARGING };
  }
  function homeError(payload) {
    return { type: ERROR, payload };
  }
  function  HomeGetAllProject(payload) {
    return { type: GETPROJECTS, payload };
  }
  function  myProject(payload) {
    return { type: MYPROJECTS, payload };
  }
  function  homeSuccess(payload) {
    return { type: SUCCESS, payload };
  }

  function  homeResetValues() {
    return { type: RESETVAULES };
  }
  function  homeProjectInfo(payload) {
    return { type: PROJECTINFO,payload};
  }

  function  homeProjectLeads(payload) {
    return { type: LEADSPROJECT,payload};
  }


  function  homeSearchBox(payload) {
    return { type: PROJECTSEARCH,payload};
  }
  
  
  function  homeMySearchBox(payload) {
    return { type: MYPROJECTSEARCH,payload};
  }
  
  
  
  function requestProjects() {
    return async function thunk(dispatch) {
      dispatch(loadingRequest());
  
      fetch(`${URL}project/allProject`, {
        method: 'GET', // or 'PUT', // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(HomeGetAllProject(response.data))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }

  function requestMyProjects() {
    return async function thunk(dispatch) {
      dispatch(loadingRequest());
  
      fetch(`${URL}user/Projects`, {
        method: 'GET', // or 'PUT', // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(myProject(response.data))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }


  function createProjects(data) {
    return async function thunk(dispatch) {
      dispatch(loadingRequest());
  
      fetch(`${URL}project/create`, {
        method: 'POST', // or 'PUT', // data can be `string` or {object}!
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(homeSuccess(true))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }


  function createLead(data) {
    return async function thunk(dispatch) {
      dispatch(loadingRequest());
  
      fetch(`${URL}lead/create`, {
        method: 'POST', // or 'PUT', // data can be `string` or {object}!
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(homeSuccess(true))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }



  function getProjectInfo(id) {
    return async function thunk(dispatch) {
       fetch(`${URL}/project/${id}`, {
        method: 'GET', // or 'PUT', // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(homeProjectInfo(response.data))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }

  function changeSearch(data) {
    return async function thunk(dispatch) {
      dispatch(homeSearchBox(data))
    };
  }

  function myChangeSearch(data) {
    return async function thunk(dispatch) {
      dispatch(homeMySearchBox(data))
    };
  }

  
  
  function getProjectLeads(id) {
    return async function thunk(dispatch) {
       fetch(`${URL}project/lead/${id}`, {
        method: 'GET', // or 'PUT', // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(homeProjectLeads(response.data))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }
  
  
  
  

  function updateProjects(data,id) {
    return async function thunk(dispatch) {
      dispatch(loadingRequest());
  
      fetch(`${URL}project/edit/${id}`, {
        method: 'PUT', // or 'PUT', // data can be `string` or {object}!
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }).then(res => res.json())
      .catch(error =>  dispatch(homeError(error)))
      .then(response => {
        if(response.status==="ok"){
          dispatch(homeSuccess(true))
        }else{
          dispatch(homeError(response.error))
        }
      })
      
  
    };
  }

  
  
  export {
    homeError,
    requestProjects,
    HomeGetAllProject,
    requestMyProjects,
    createProjects,
    homeResetValues,
    getProjectInfo,
    updateProjects,
    createLead,
    getProjectLeads,
    changeSearch,
    myChangeSearch

  
  };
  