
import React, { /* Fragment */ } from "react";

export const  TextBox = (props) => {
  
        return (
     <div className={props.DivclassName} >     
      <input  
      className={props.ButtonclassName} 
      type={props.type}
      placeholder={props.PlahceHolder}
      required={props.required}
      value={props.value}
      minlength={props.minlength}
      onChange={props.actionText}
      onBlur={props.blur} />       
       {props.icon}
     </div>
  
  

        ) 
}

export default TextBox;