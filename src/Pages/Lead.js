import React,{useEffect} from "react";
import { useParams } from 'react-router-dom'
import Menu from "../Components/Menu";
import { useSelector, useDispatch } from "react-redux";
import Links from '../Components/Links'
import {
  selectLeadsProject

    
  } from "../Reducers/Home";
  import { getProjectLeads,homeResetValues,} from "../Actions/Home";



export const Lead = () => {

    let { leadId,ProjecName } = useParams();    
    const Leads = useSelector(selectLeadsProject);


  

    const dispatch = useDispatch();
  



     useEffect(() => {

      
    
        return () => {
            dispatch(homeResetValues())

        }
    }, [])


    useEffect(() => {

        dispatch(getProjectLeads(leadId));

    }, [])

  
 

    
  return (
      
    <div className="login-register-style">

<Menu  hideSearchBox={true}/>
     
<div style={{ width: "80%", margin: "0 auto", padding: "10px"}}

      >
          <Links
          
          text='Volver'
          toLink="/Users/MyProjects"/>
      
       <h1 >{`Leads de ${ProjecName}`}</h1>

<div className="lead-count-div">{Leads.length}</div>
       

       <table style={{margin:"0 auto", overflowX: "auto"}} className="table">
  <tr>
    <th>Nombre</th>
    <th>Creación</th>
    <th>Email</th>
    <th>Telefono</th>
  </tr>

  { Leads.length>0 && Leads.map((item, key) => (
        <tr key={key}> 
        <td>{`${item.name} ${item.last_name}`}</td>
        <td>{new Date(item.created_at).toLocaleString("en-US", {timeZone: "America/Bogota"})}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
   
      </tr>
      ))}
 
  
</table>
</div>
    </div>
  );
};


  export default Lead;
  


