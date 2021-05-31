import React, { /* Component, Fragment,userState, */useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../Img/vecindario-logo.svg'
import Links from '../Components/Links'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Css/menu.css";
import Dropdown from 'react-bootstrap/Dropdown'

import {  selectLoginAuthValue  } from "../Reducers/Login";
import {  logAuth  } from "../Actions/Login";
import SearchBox from './SearchBox'
/* import * as AppAction from '../Actions/AppAction' */



const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </Link>
));

function  Menu(props) {
  const authorizationValue = useSelector(selectLoginAuthValue);
  const dispatch = useDispatch();

  return (
    
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
        
      <Link className='menu-logo' to="/">
        <img src={logo} alt="logo vencindario"/>
      </Link>


     {!props.hideSearchBox && <div className='div-search-menu'>
       <SearchBox searchitems={props.searchitems} handleOnSelectItem={props.handleOnSelectItem} handleClearItem={props.handleOnClear}/>
      </div>}
           <div>
           <h1 style={{width:"100%",marginBottom:"10px"}}>{props.titleView}</h1>
      {authorizationValue? 

      <Dropdown>
      <Dropdown.Toggle  as={CustomToggle}>
      {window.localStorage.getItem("user_email")}
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item ><Links text='Crear Proyecto' toLink="/Project/Create"/></Dropdown.Item>
        <Dropdown.Item ><Links text='Mis Proyectos' toLink="/Users/MyProjects"/></Dropdown.Item>
        <Dropdown.Item><Links text='Cerrar Sesion'  actionClick={()=>dispatch(logAuth())}/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>:

<div className=''>
     
<Links
className='create-menu-button'
text='Crear cuenta'
toLink="/Registrarse"/>
<Links
  className='create-menu-button'
  text='Ingresar'
  toLink="/Users/Login"/>
</div> }
</div>
     
    </nav>
  </header>
  )

}

/* const mapStateToProps = ({ AppReducer }) => AppReducer */
//conectar tareas al reducer y traer las acciones del tareas actions
export default Menu

