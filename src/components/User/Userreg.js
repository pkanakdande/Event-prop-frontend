import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate } from "react-router-dom";


function Userreg() {
  const navigate = useNavigate();

  const [regForm,setRegForm]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    conformpassword:"",
   
  })
  const {name, email, contact,password} = regForm;
  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
    
     }

     async function submitform(e){
     
      // const data=new FormData(e.target)
      console.log(regForm)
      e.preventDefault();
      if (regForm.password !== regForm.conformpassword)
      { alert("password and conform password not match")}

     else
       {
      
        fetch("https://proposal-back-end.onrender.com/user/register",{
        method:"POST",
        crossDoamin : true,
        headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
        body:JSON.stringify(regForm)
        
    })
    .then((res)=>res.json())
    .then((data)=>{
      if (data.status === "ok")
      {
       alert("registration Successful")
       navigate("/User")
      }
      if (data.status === "error"){
        alert(`${data.error}`)
      }
      console.log(data ,"UserRegisterd")})
    
    .catch((err)=>{
      console.log(err)})
     }}
  
  return (
    <div>
      <div>
      <Home />
      <div className="Logo">LOGO</div>
      <div className="Text">
        TEXT WILL
        <br /> BE DISPLAYED
        <br /> HERE
      </div>
      <div className="form-box-reg">
        <div className="top">
        <Link to="/" style={{textDecoration:'none', marginTop:'15px'}}>Vendor</Link>
        <p style={{}}>User</p>
        </div>
        <div className="heading">
            <h2>Register in your account</h2>
          </div>
          <div className="form">
            <form method="post" style={{margin:'0px 0px 0px 0px'}} onSubmit={submitform}>
                <div className="input">
                    {" "}
                    <input type="text" placeholder="Name" style={{width:'86%'}} onChange={e=>updateData(e,"name")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="email" placeholder="Email" style={{width:'86%'}} onChange={e=>updateData(e,"email")} required />
                </div>
                <div className="input">
                    {" "}
                    <input type="number" placeholder="Contact" style={{width:'86%'}} onChange={e=>updateData(e,"contact")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Password" style={{width:'86%'}} onChange={e=>updateData(e,"password")} required/>
                </div>
                <div className="input">
                    {" "}
                    <input type="password" placeholder="Confirm Password" style={{width:'86%'}} onChange={e=>updateData(e,"conformpassword")} required/>
                </div>

                <div className="regfooter">
                <div className="signin">
                  {" "}
                  <Link to="/User" style={{textDecoration:'none'}}>Sign In</Link>{" "}
                </div>
                <button className="regbutton" type="submit">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Userreg
