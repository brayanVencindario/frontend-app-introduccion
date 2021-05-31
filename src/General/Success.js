import React from 'react'
import '../css/spinner.css'
//import imgAlertSucces from '../img/imgAlertSucces.png'


const Success = (props) => (
/* <div className="popups-alert success-text">
  <img className='alert-img' src={imgAlertSucces} alt='imgAlertSucces' />
<div className="popups-alert-inside" >
  { props.mensaje}
</div>
</div>
 */

 <div className="alert alert-success" role="alert">
 { props.mensaje}
</div>
 
)

export default Success