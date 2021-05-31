
import React, { /* Fragment */ } from "react";


export const  CheckBox = (props) => {
  
        return (

  <div>
        <input type="checkbox" name={props.name} value={props.value} onChange={props.onClickAction} checked={props.value}/>
  <label htmlFor={props.name}> {props.text}</label>
  </div>

        ) 
}

export default CheckBox;