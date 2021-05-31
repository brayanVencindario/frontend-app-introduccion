import React,{useState,useEffect} from "react";
import Links from '../Components/Links'
import { useSelector, useDispatch } from "react-redux";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from '../Components/Button'
import TextBox from "../Components/TextBox";
import ImgLogin from "../Img/vecindario-iniciar-sesion.png";
import { Redirect } from 'react-router-dom'
import {
    selectLoginSuccess,
    selectLoginLoading,
    selectLoginError,
    selectLoginAuthValue
    
  } from "../Reducers/Login";
  import { loginUser,loginReset} from "../Actions/Login";


export const Login = () => {


   useEffect(() => {
    
      return () => {
          dispatch(loginReset())

      }
  }, [])
    
    const success = useSelector(selectLoginSuccess);
    const isLoading = useSelector(selectLoginLoading);
    const error = useSelector(selectLoginError);
    const authorizationValue = useSelector(selectLoginAuthValue);
    const dispatch = useDispatch();
  
/*     React.useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]); */
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(0);


    const submitLogin = (e) =>{
        e.preventDefault()

        const data ={
            email: email,
            password: password
        }

        dispatch(loginUser(data));
       
       
    }
    
    
  return (
    <div className="login-register-style">
      <img src={ImgLogin} alt="imagen login de cuenta" />

      <h1>Bienvenido a Vecindario</h1>
      <h2>
      Aqui tener casa propia sí es posible. Para poderte brindar una mejor asesoría inicia sesión.
      </h2>

<form onSubmit={(e)=>{submitLogin(e)}}>


      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="email"
        required={true}
        value={email}
        actionText={(e) => setEmail(e.target.value)}
        PlahceHolder="Correo electrónico"
        icon={
          <AiOutlineMail
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type={passwordShow?"text":"password"}
        required={true}
        value={password}
        actionText={(e) => setPassword(e.target.value)}
        PlahceHolder="Contraseña"
        icon={
          <FaEyeSlash
            onClick={()=>setPasswordShow(!passwordShow)}
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
      
      <Button
      className="create-menu-button"
      text="Ser parte"/>

</form>
      {isLoading?"Cargando...":""}
      {error?  <div> {"Nombre de usuario o contraseña incorrecta"}  </div> :""}

      <div>
      ¿No tienes cuenta?
      <Links
          
          text='Regístrate'
          toLink="/Registrarse"/>
        </div>
        <Links
          
          text='Volver'
          toLink="/"/>
        {authorizationValue ? <Redirect to='/' /> : '' }

    </div>
  );
};


  export default Login;
  


