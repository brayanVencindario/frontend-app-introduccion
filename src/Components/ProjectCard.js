import React, { /* Fragment */ } from "react";
import { BsArrowsMove } from 'react-icons/bs'
import Links from "../Components/Links";
import { MdDirectionsCar,MdFavoriteBorder } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaToilet } from 'react-icons/fa'


import imgModel from '../Img/open-uri20200505-4-smqeh0_thumb.jpg'

export const  ProjectCard = (props) => {
     
        return (
            <div className="col-md-4" key={props.keyItem} style={{ marginBottom: "20px" }}>
        
            <div style={{ padding: "20px", border: "0.5px solid black" }}>
              <div className="text-align-left project-name">{props.name}</div>
              <div className="text-align-left project-type">{props.type_proyect}</div>
              <div className="text-align-left project-location"><span>{`${props.city_name}`}</span>: <span>{`${props.proyect_address}`}</span></div>
              <div className="text-align-left project-card-price">
                  <div style={{width:"100%", position:"relative"}}>
                  <img style={{width:"100%"}} src={imgModel} alt="imagen predicenada"/>
                
                <div className="project-price-text">
                <MdFavoriteBorder />
                <span className="fee-from">Precio final desde:</span>
                <span className="price-from">{`${props.price} Millones*`}</span>
                </div>
                </div>
              </div>
              <div className="footer-card row align-items-center justify-content-center p-3">
                  <div className="ctn-icon-footer d-flex flex-column align-items-center justify-content-center mx-1 ml-md-0 mr-md-3">
                  <BsArrowsMove size={32} className="icon-project-color"/>
                    <span>
                      {props.area} mt<sup>2</sup>
                    </span>
                  </div>
                  <div className="ctn-icon-footer d-flex flex-column align-items-center justify-content-center mx-1 ml-md-0 mr-md-3">
                    <MdDirectionsCar size={32} className="icon-project-color"/>
                    <span> {props.parking_lot?"Incluido":"No incluido"}</span>
                  </div>
                  <div className="ctn-icon-footer d-none d-md-flex flex-column align-items-center justify-content-center mx-1 ml-md-0 mr-md-3">
                    <GiReceiveMoney size={32} className="icon-project-color"/>
                    <span>{props.vis_value?"Aplica subsidio":"No aplica subsidio"}</span>
                  </div>
                  <div className="ctn-icon-footer d-none d-md-flex flex-column align-items-center justify-content-center mx-1 ml-md-0 mr-md-3">
                    <FaToilet size={32} className="icon-project-color"/>
                    <span>{props.bathrooms_numbres}</span>
                  </div>
                </div>
            </div>


           


            {props.edit?<Links
                  className='create-menu-button'
                  text='Editar'
                  toLink={`/Project/Edit/${props.id}`}/>:""}

{props.edit?<Links
                  className='create-menu-button'
                  text='Ver Leads'
                  toLink={`/Project/Lead/${props.id}/${props.name}`}/>:
                  <Links
                  className='create-menu-button'
                  text='Dejar mi información'
                  actionClick={props.actionClick}/>}


          </div>
  
  

        ) 
}

export default ProjectCard;