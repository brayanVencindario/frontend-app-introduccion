import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '../Components/Button'
import TextBox from "../Components/TextBox";
import ImgLogin from "../Img/vecindario-iniciar-sesion.png";

import {
    selectHomeSuccess,
    selectHomeLoading,
    selectHomeError,

    
  } from "../Reducers/Home";
  import { createLead,homeResetValues} from "../Actions/Home";


export const LeadForm = (props) => {

    const success = useSelector(selectHomeSuccess);
    const isLoading = useSelector(selectHomeLoading);
    const error = useSelector(selectHomeError);
    const dispatch = useDispatch();
  

    useEffect(() => {

        if(success){

          setTimeout(()=> props.onHide(),2000)
      
        }
        
     }, [props, success])

   useEffect(() => {
    
      return () => {
          dispatch(homeResetValues())

      }
  }, [dispatch])


    

/*     React.useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]); */

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const submitLead = (e) =>{
        e.preventDefault()

        const data ={
            proyect_id:props.id,
            name: name,
            last_name: lastName,
            email: email,
            phone: phone
        }

        dispatch(createLead(data));
      
       
    }
    
    
  return (
    <div className="login-register-style">
      <img src={ImgLogin} alt="imagen login de cuenta" />


<form onSubmit={(e)=>{submitLead(e)}}>


<TextBox
        DivclassName="lead-input-text"
        ButtonclassName="search-text-box"
        type={"text"}
        required={true}
        value={name}
        actionText={(e) => setName(e.target.value)}
        PlahceHolder="Nombres"
   
      />

<TextBox
        DivclassName="lead-input-text"
        ButtonclassName="search-text-box"
        type={"text"}
        required={true}
        value={lastName}
        actionText={(e) => setLastName(e.target.value)}
        PlahceHolder="Apellidos"
   
      />

      <TextBox
        DivclassName="lead-input-text"
        ButtonclassName="search-text-box"
        type="email"
        required={true}
        value={email}
        actionText={(e) => setEmail(e.target.value)}
        PlahceHolder="Correo electrónico"
   
      />
      <TextBox
        DivclassName="lead-input-text"
        ButtonclassName="search-text-box"
        type={"text"}
        required={true}
        value={phone}
        actionText={(e) => setPhone(e.target.value)}
        PlahceHolder="Telefono"
   
      />
      
      <Button
      className="create-menu-button"
      text="Enviar"/>

</form>
      {isLoading?"Cargando...":""}
      {error?  <div> {error}  </div> :""}
      {success?  <div> información enviada correctamente  </div> :""}
    </div>
  );
};


  export default LeadForm;
  


