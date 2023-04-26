import React from "react";
import "./VendorProp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  // console.log(props)
  const navigate = useNavigate();
  const logout=()=> {
    localStorage.removeItem('vendorToken');
    localStorage.removeItem('vendorloggedIn');
    navigate('/')
  
   }
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>{document.cookie.split("=")[1]}</b>
      </div>
      <div class="dropdown">
        <div className="imgven"></div>
        <div class="dropdown-content">
          <Link onClick={logout}  to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
