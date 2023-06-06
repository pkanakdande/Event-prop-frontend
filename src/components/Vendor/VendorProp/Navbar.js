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
        <b>{localStorage.getItem("vendorName")}</b>
      </div>
      <div className="dropdown">
        <div className="imgven"></div>
        <div className="dropdown-content">
          <Link onClick={logout}  to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
