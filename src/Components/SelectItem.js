
import React, { /* Fragment */ } from "react";


export const  SelectItem = (props) => {


    const ponerOpcionesLugares = () =>
    props.items.map((item, key) => (
        <option  key={key} value={item.nombre}>
          {item.nombre}{}
        </option>
      ));

    return (
      <select
        className={props.DivclassName}
        onChange={props.onClickAction}
        required
      >
        <option className='option-values' value={props.type_proyect}>
          {props.type_proyect?props.type_proyect:"seleccion un tipo de proyecto"}
        </option>
        {ponerOpcionesLugares()}
      </select>
    );
  
 /*        return (

    <button className={props.className} onClick={props.actionClick}>
         {props.text}
    </button>

        )  */
}

export default SelectItem;