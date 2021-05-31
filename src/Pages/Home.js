import React, { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import Modal from "../Components/Modal";
import ProjectCard from "../Components/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../Reducers/Home";
import { requestProjects,changeSearch } from "../Actions/Home";


  let ProjectAll=[]
export const Home = () => {
  const  projects = useSelector(selectProject);
  const dispatch = useDispatch();


  const [show, setShow] = useState(false);
  const [idProject, setIdProject] = useState(false);
 

  const showModal = (id) => {
    setShow(true)
    setIdProject(id)
  };
  
  const hideModal = () => {
    setShow(false)
  };

    
  const handleOnClear = () => {
    dispatch(changeSearch(ProjectAll));
  }
 
  const handleOnSelect = (item) => {
    // the item selected
    ProjectAll=projects
    dispatch(changeSearch([item]));

  }

  useEffect(() => {
    
    dispatch(requestProjects());

  }, []);

  return (
    <div className="login-register-style">
      <Menu searchitems={projects} handleOnSelectItem={handleOnSelect} handleOnClear={handleOnClear}  hideSearchBox={false} titleView="Home"/>
      <Modal show={show} hideModal={hideModal} idProject={idProject}  />

      <div
        className="card-proyect"
      >
        {projects.map((dataProject, key) => (
         <ProjectCard
         keyItem={key}
         edit={false}
         actionClick={()=>showModal(dataProject.id)}
         id={dataProject.id}
         name={dataProject.name}
         type_proyect={dataProject.type_proyect}
         city_name={dataProject.city_name}
         proyect_address={dataProject.proyect_address}
         price={dataProject.price}
         area={dataProject.privateArea}
         parking_lot={dataProject.parking_lot}
         vis_value={dataProject.vis_value}
         bathrooms_numbres={dataProject.bathrooms_numbres}
         
         />
        ))}
      </div>

      
    </div>
  );
};

export default Home;
