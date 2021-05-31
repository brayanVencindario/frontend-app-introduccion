import React,{useState,useEffect} from "react";
import Links from '../Components/Links'
import { useSelector, useDispatch } from "react-redux";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Button from '../Components/Button'
import TextBox from "../Components/TextBox";
import { Redirect } from 'react-router-dom'
import ImgCreation from "../Img/imagen-crear-cuenta.png";
import {
    selectRegisterSuccess,
    selectRegisterLoading,
    selectRegisterError,
    selectRegisterEmailCheck
    
  } from "../Reducers/Register";

  import { selectLoginAuthValue } from "../Reducers/Login";
  import { registerUser,checkEmail,registerReset } from "../Actions/Register";


export const Register = () => {


    useEffect(() => {
    
        return () => {
            dispatch(registerReset())

        }
    }, [])

    
    const success = useSelector(selectRegisterSuccess);
    const isLoading = useSelector(selectRegisterLoading);
    const error = useSelector(selectRegisterError);
    const emailValue = useSelector(selectRegisterEmailCheck); 
    const authorizationValue = useSelector(selectLoginAuthValue);
    const dispatch = useDispatch();
  
/*     React.useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]); */
  

    const [names, setNames] = useState('');
    const [lastNames, setLastNames] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(0);


    const submitRegister = (e) =>{
        e.preventDefault()

        const data ={
            name:names,
            last_name: lastNames,
            email: email,
            phone:phone,
            password: password
        }

        if(!emailValue){
            dispatch(registerUser(data));

            setNames("")
            setLastNames("")
            setEmail("")
            setPhone("")
            setPassword("")
        }
       
       
    }

    const checkEmailInput = (e) =>{
        e.preventDefault()
         const data ={                 
            email: email       
        }

        if(email){
            dispatch(checkEmail(data)); 
        }
  


    
    }
    
    
  return (
    <div className="login-register-style">
      <img src={ImgCreation} alt="imagen creacion de cuenta" />

      <h1>Crea un diagnóstico totalmente gratis</h1>
      <h2>
        Aquí tener casa propia sí es posible; completa tu diagnóstico y descubre
        que proyectos puedes pagar.
      </h2>

<form onSubmit={(e)=>{submitRegister(e)}}>
      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={names}
        actionText={(e) => setNames(e.target.value)}
        PlahceHolder="Nombres"
        icon={
          <BsFillPersonFill
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={lastNames}
        actionText={(e) => setLastNames(e.target.value)}
        PlahceHolder="Apellidos"
        icon={
          <BsFillPersonFill
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={phone}
        actionText={(e) => setPhone(e.target.value)}
        PlahceHolder="Teléfono móvil"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="email"
        required={true}
        value={email}
        actionText={(e) => setEmail(e.target.value)}
        PlahceHolder="Correo electrónico"
        blur={(e)=>checkEmailInput(e)}
        icon={
          <AiOutlineMail
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
      {emailValue?'error correo registrado':""}

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
      {success?  <div> cuenta creada exitosamente ingrese aqui para logear
        <Links
          
          text='login'
          toLink="/Users/Login"/>
      </div> :""}



      <div>
      ¿Ya tienes cuenta?
      <Links
          
          text='Ingresa'
          toLink="/Users/Login"/>
        </div>
        <Links
          
          text='Volver'
          toLink="/"/>
      {authorizationValue ? <Redirect to='/' /> : '' }
    </div>
    
  );
};


  export default Register;
  


