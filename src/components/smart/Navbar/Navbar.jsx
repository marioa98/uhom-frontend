import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import {SessionOptions} from "./SessionOptions";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
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
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/houses">Propiedades</Link>
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
          <SessionOptions/>
        </div>
        
      </nav>
    );
  }
}
