import React, { Component,useEffect } from "react";
import Menu from "./Components/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import {Login} from "./Pages/Login"
import {Home} from "./Pages/Home"
import {MyProjects} from "./Pages/MyProject"
import {ProjectForm} from "./Pages/ProjectForm"
import {Lead} from "./Pages/Lead"
import {Register} from "./Pages/Register"
import {  useDispatch } from "react-redux";
import { tokenVerify} from "./Actions/Login";
/* import * as AppAction from "../src/Actions/AppAction"; */
/* import { connect } from "react-redux"; */
/* import Home from "./Pages/Home";
import Post from "./Pages/Post"; */
/* import axios from 'axios'
import {URL} from '../src/Global/url' */

export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenVerify())
}, [])

    return (
      <BrowserRouter>

        {
          <Route>

            <Route exact path='/Registrarse' component={Register} />
            <Route exact path='/Users/Login' component={Login} />
            <Route exact path='/Users/MyProjects' component={MyProjects} />
            <Route exact path='/Project/Create' component={ProjectForm} />
            <Route exact path='/Project/Edit/:projectId' component={ProjectForm} />
            <Route exact path='/Project/Lead/:leadId/:ProjecName' component={Lead} />
            <Route exact path='/' component={Home} />
          </Route>
        }
      </BrowserRouter>
    );
  
}

/* const mapStateToProps = ({ LoginReducer }) => LoginReducer */
//conectar tareas al reducer y traer las acciones del login actions
 //const mapStateToProps = ({ AppReducer }) => AppReducer; 
//conectar tareas al reducer y traer las acciones del tareas actions
export default App;
