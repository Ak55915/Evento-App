import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {mystore, initialState} from "./Store";

function Login() {
  let navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    email_id: "",
    password: "",
  });


  const handleInput = (ev) => {
    setlogindata((logindata) => ({
      ...logindata,
      [ev.target.name]: ev.target.value,
    }));
  };

  const submitData = (ev) => {
    ev.preventDefault();
    console.log(logindata);

    const reqOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    };

    fetch("http://localhost:8080/logincheck", reqOptions)
      .then((response) => response.text())
      .then((data) => { 
            if(data.length !== 0){
              const res=JSON.parse(data)
              let role=res.login_id.role; 
              if(role === "customer")
              {
              
              localStorage.setItem("loggedinuser", JSON.stringify(res));
              mystore.dispatch({ type: "LOGGEDIN" });
              navigate("/customerhome");

              }
              else if(role === "vendor")
              {
              
              localStorage.setItem("loggedinuser", JSON.stringify(res));
              mystore.dispatch({ type: "LOGGEDIN" });
              navigate("/vendorhome");

              }
            
            else 
            {
             alert("in admin");
               
              localStorage.setItem("loggedinuser", JSON.stringify(res));
              mystore.dispatch({ type: "LOGGEDIN" });
              navigate("/adminhome");
            }
          
          }else {

            console.log("INvalid user.........");
            navigate("/error");

          }
       });
        
      
  };

  return (
    <div className="Container">
      <h1 className="label"> Login</h1>
      <form className="login_form" action="" name="form">
        <div>
          <div className="font my-3">
            Enter Email  :
            <input type="text" name="email_id" placeholder="email" value={logindata.email} onChange={handleInput}/>
          </div>

          <div className="font font2 my-3">
            Password : 
            <input type="password" name="password" placeholder="password" value={logindata.password} onChange={handleInput}
            />
          </div >
          <input className=" btn btn-primary my-3"  type="submit" value="Login" onClick={submitData} />
        </div>
      </form>
    </div>
  );
}
export default Login;
