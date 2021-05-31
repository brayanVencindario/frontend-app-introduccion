import Modal from "react-bootstrap/Modal";
import React, { /* Fragment */ } from "react";
import LeadForm from "./LeadForm";


export const  Modals = (props) => {
  
        return (

            <Modal show={props.show} onHide={props.hideModal} style={{marginTop:'80px'} }>
          
            <Modal.Body style={{overflow:'auto'}}>
              <LeadForm id={props.idProject} onHide={props.hideModal}/>
            
          
            </Modal.Body>
          </Modal>
        ) 
}

export default Modals;