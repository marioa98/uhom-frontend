import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../../assets/styles/General/divs.css";
import AppopinmentsController from "../../../controllers/AppoinmentsControllers";

export default function AppopinmentButton(props){
  const {address, price} = props
  const baseUri = "https://api.whatsapp.com/send?"
  const defaultPhone = "5213121042284"

  const sendMessage = () => {
    const message = setMessage();
    window.open(`${baseUri}phone=${defaultPhone}&text=${message}`)
  }

  const setMessage = () => {
    return `Hola, me gustaría una cita para conocer la casa ubicada en ${address}, que tiene un costo publicado de ${price}. Saludos!`
  }

  return(
    <div className="fluid">
      <Link className="ui button btn-signin" onClick={() => sendMessage()}>
        ¡Haz una cita, visita la casa!
      </Link>
    </div>
  )
}