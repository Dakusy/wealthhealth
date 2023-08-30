import React from "react";
import logo from '../assets/logo.png'; 
import '../css/header.css';

function Header() {
    return (
      <div className="header_container">
        <img src={logo} alt="Logo de HRnet" className="logo" />
        <h1 className="title">HRnet</h1>
      </div>
    );
  }
  
  export default Header;