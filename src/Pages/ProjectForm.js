import React,{useState,useEffect} from "react";
import { Redirect,useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Button from '../Components/Button'
import Links from '../Components/Links'
import TextBox from "../Components/TextBox";
import SelectItem from "../Components/SelectItem";
import ImgCreation from "../Img/imagen-crear-cuenta.png";
import {
  selectHomeLoading,
  //selectHomeError,
  selectHomeSuccess,
  selectMyProjectInfo

    
  } from "../Reducers/Home";
  import { createProjects,homeResetValues,getProjectInfo,updateProjects} from "../Actions/Home";
import CheckBox from "../Components/CheckBox";


export const ProjectForm = () => {
  let { projectId } = useParams();    
  const success = useSelector(selectHomeSuccess);
  const isLoading = useSelector(selectHomeLoading);
  //const error = useSelector(selectHomeError);
  const dispatch = useDispatch();
  const infoProject = useSelector(selectMyProjectInfo);
  
     useEffect(() => {
    
        return () => {
            dispatch(homeResetValues())

        }
    },[dispatch])




  
    React.useEffect(() => {

      if(success){
        setNames("")
        setType_proyect("")
        setCity_name("")
        setProyect_address("")
        setPrice("")
        setPrivateArea("")
        setBuiltArea("")
        setVis_value("")
        setBathrooms_numbres("")
        setParking_lot("")
        setSales_email("")
      }
     
    }, [success]);

 

    useEffect(() => {
   
      if(projectId){
        dispatch(getProjectInfo(projectId));
      }
  
  
  
    },[dispatch, projectId]);

  useEffect(() => {
   

    if(infoProject.length>0 && projectId){
 
      setNames(infoProject[0].name)
      setType_proyect(infoProject[0].type_proyect)
      setCity_name(infoProject[0].city_name)
      setProyect_address(infoProject[0].proyect_address)
      setPrice(infoProject[0].price)
      setPrivateArea(infoProject[0].privateArea)
      setBuiltArea(infoProject[0].builtArea)
      setVis_value(infoProject[0].vis_value)
      setBathrooms_numbres(infoProject[0].bathrooms_numbres)
      setParking_lot(infoProject[0].parking_lot)
      setSales_email(infoProject[0].sales_email)
    }



  }, [infoProject, projectId]);


    const [names, setNames] = useState("");
    const [type_proyect, setType_proyect] = useState('');
    const [city_name, setCity_name] = useState('');
    const [proyect_address, setProyect_address] = useState('');
    const [price, setPrice] = useState('');
    const [privateArea, setPrivateArea] = useState('');
    const [builtArea, setBuiltArea] = useState('');
    const [vis_value, setVis_value] = useState(false);
    const [bathrooms_numbres, setBathrooms_numbres] = useState('');
    const [parking_lot, setParking_lot] = useState(false);
    const [sales_email, setSales_email] = useState('');

    const submitData ={
      name:names,
      type_proyect: type_proyect,
      city_name: city_name,
      price:price,
      proyect_address: proyect_address,
      privateArea:privateArea,
      builtArea: builtArea,
      vis_value: vis_value?1:0,
      bathrooms_numbres:bathrooms_numbres,
      parking_lot: parking_lot?1:0,
      sales_email: sales_email
  }

    const submitFormProject = (e) =>{
        e.preventDefault()

        if(projectId){
          dispatch(updateProjects(submitData,projectId));
        }else{
          dispatch(createProjects(submitData));
        }
       


       
      
       

      
       
    }

    
  return (
    <div className="login-register-style">
      <img src={ImgCreation} alt="imagen creacion de cuenta" />

      <h1>{projectId?"Edita tu Proyecto":"Crea tu Proyecto"}</h1>

<form onSubmit={(e)=>{submitFormProject(e)}}>
      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={names}
        actionText={(e) => setNames(e.target.value)}
        PlahceHolder="Nombre del proyecto"
        icon={
          <BsFillPersonFill
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
      <div className="create-from-input">
      <SelectItem
       ButtonclassName="search-text-box"
      items={[{nombre:"Residencial"},{nombre:"Comercial"},{nombre:"Industrial"},{nombre:"Lotes"}]}
      type_proyect={type_proyect}
      onClickAction={(e) => setType_proyect(e.target.value)}
      />


    
        <CheckBox      value={vis_value} name="Vis" text="Subsidio vis" onClickAction={(e) => setVis_value(!vis_value)}/>
         <CheckBox      value={parking_lot} name="parqueadero" text="Parqueadero" onClickAction={(e) => setParking_lot(!parking_lot)}/>
         </div>
      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={city_name}
        actionText={(e) => setCity_name(e.target.value)}
        PlahceHolder="Nombre de la ciudad"
        icon={
          <BsFillPersonFill
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
         
        
      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="number"
        required={true}
        value={price}
        actionText={(e) => setPrice(e.target.value)}
        PlahceHolder="Precio"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={proyect_address}
        actionText={(e) => setProyect_address(e.target.value)}
        PlahceHolder="Dirección"
        icon={
          <AiOutlineMail
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

      <TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="number"
        required={true}
        value={privateArea}
        actionText={(e) => setPrivateArea(e.target.value)}
        PlahceHolder="Área privada"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
 

<TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="number"
        required={true}
        value={builtArea}
        actionText={(e) => setBuiltArea(e.target.value)}
        PlahceHolder="Área construida"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

<TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="number"
        required={true}
        value={bathrooms_numbres}
        actionText={(e) => setBathrooms_numbres(e.target.value)}
        PlahceHolder="Numero de baños"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />

<TextBox
        DivclassName="div-buton-register"
        ButtonclassName="search-text-box"
        type="text"
        required={true}
        value={sales_email}
        actionText={(e) => setSales_email(e.target.value)}
        PlahceHolder="Email de ventas"
        icon={
          <FaEyeSlash
            style={{ position: "absolute", right: "6px", top: "21px" }}
          />
        }
      />
      
      
      <Button
      className="create-menu-button"
      text={projectId?"Editar Proyecto":"Crear Proyecto"}/>

</form>
      {isLoading?"Cargando...":""}
    {success?<Redirect to='/Users/MyProjects'/>:""}

    <Links
          
          text='Volver'
          toLink="/Users/MyProjects"/>
      
    </div>
  );
};


  export default ProjectForm;
  


