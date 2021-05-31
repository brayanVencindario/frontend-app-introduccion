
import React, { /* Fragment */ } from "react";
import { Link } from "react-router-dom";

export const  Links = (props) => {
  
        return (

    <Link to={props.toLink} className={props.className} onClick={props.actionClick}>
         {props.text} 
    </Link>

        ) 
}

export default Links;