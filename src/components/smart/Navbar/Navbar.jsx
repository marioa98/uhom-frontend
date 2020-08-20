import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {SessionOptions} from "./SessionOptions";
import { Avatar } from "./Avatar";
import '../../../assets/styles/General/navbar.css';
import { useUserContext } from "../../../UserContext";

export default function Navbar(props){
  
  const [isOpen, setState] = useState(false);
  const { isLogged } = useUserContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* Agregar logo nuestro */}
          {/* <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link> */}
          <button
            type="button"
            className="nav-btn"
            onClick={() => setState(!isOpen)}
          >
            <FiMenu className="nav-icon" />
          </button>
        </div>
        <ul
          className={isOpen ? "nav-links show-nav" : "nav-links"}
        >
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/properties">Propiedades</Link>
          </li>
          <li>
            <Link to="/">Recursos</Link>
          </li>
          <li>
            <Link to="/aboutus">Acerca de</Link>
          </li>
          
        </ul>
      </div>
      
      <div className="nav-right">
        { isLogged ? <Avatar/> : <SessionOptions/> }
      </div>
    </nav>
  );
}