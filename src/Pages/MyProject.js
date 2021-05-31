import React, {  useEffect } from "react";
import Menu from "../Components/Menu";
import ProjectCard from "../Components/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { selectMyProject } from "../Reducers/Home";
import { requestMyProjects,myChangeSearch } from "../Actions/Home";


let myProjectsAll=[]
export const MyProjects = () => {
  const myProjects = useSelector(selectMyProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMyProjects());
  }, [dispatch]);

  const handleOnClear = () => {
    dispatch(myChangeSearch(myProjectsAll));
  }
 
  const handleOnSelect = (item) => {
    // the item selected
    myProjectsAll=myProjects
    dispatch(myChangeSearch([item]));

  }

  return (
    <div className="login-register-style">
      <Menu searchitems={myProjects} handleOnSelectItem={handleOnSelect} handleOnClear={handleOnClear}  hideSearchBox={false} titleView="Mis proyectos"/>

      <div
       className="card-proyect"
      >
        {myProjects.map((dataProject, key) => (
         <ProjectCard
         keyItem={key}
         id={dataProject.id}
         edit={true}
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

export default MyProjects;
