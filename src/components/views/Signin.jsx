import React from 'react';
import {withRouter} from 'react-router-dom';
import "../../assets/styles/General/backgrounds.css"

function Signin(){
  return(
    <div className="dark-bg-solid">
      <h3>Registrate con nosotros</h3>
    </div>
  )
}

export default withRouter(Signin)