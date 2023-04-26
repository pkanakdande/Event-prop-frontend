import React from "react";
import "./Userprop.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userloggedIn");
    navigate("/User");
  };
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>{localStorage.getItem("userName")}</b>
      </div>
      <div class="dropdown">
        <div className="imgven"></div>
        <div class="dropdown-content">
          <Link onClick={logout} to="/User">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default UserNav;