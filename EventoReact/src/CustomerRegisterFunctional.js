import React, { useState,useEffect } from "react";
import { Button} from 'react-bootstrap'
import validation from "./validation";
import axios from 'axios'
const CustomerRegisterFunctional = () =>
{
    const [errors,setErrors]=useState({});
    const [values,setValues]=useState({
            emailid:"",
            pwd:"",
            fname:"",
            lname:"",
            sec_ans:"",
            contactno:"",
            address:"",
            sec_id:0
    });

    const [questionarray,setquestionarray] = useState([]);

   useEffect(() => {
    fetch("http://localhost:8080/allquestions")
    .then(resp=>resp.json())
    .then(data =>setquestionarray(data));
      },[]);

      const FormHandle = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        addDataToServer(values)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/register", data).then(
            (response) => {
                console.log(response);
                alert("Book Added Successfully");
            }, (error) => {
                console.log(error);
                alert("email id is already exists");
            }
        );
    }
    const handleFormSubmit=(event)=>
    {
            event.preventDefault();
            setErrors(validation(values));
            //console.log(values);
            const data = { values };
            /*const requestOptions = 
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
            };
            fetch("http://localhost:8080/register", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
            console.log("Data is submitted successfully");*/


            
    }
    const handleChange=(event)=>
    {
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };
   return (     
       <div className="Container d-flex justify-content-center">
           
           <form className="form-wrapper  ">
           <h1>Create Account </h1><br></br>
           <div className="row">
              <div className="col-sm-4 ">
                   <label className="form-label" htmlFor="emailid">Your Email</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="emailid" className="form-control" 
                     value={values.emailid} onChange={handleChange} />
                </div>
              </div>
              {errors.emailid && <p className="error">{errors.emailid}</p>}

              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="pwd">Password</label>
                </div>
                <div className="col-sm-8">
                    <input type="password" name="pwd" className="form-control"
                      value={values.pwd} onChange={handleChange}/>
                </div>
                </div>
                {errors.pwd && <p className="error">{errors.pwd}</p>}

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="fname">First Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="fname" className="form-control"
                       value={values.fname} onChange={handleChange} />
                </div>
                </div>
                {errors.fname && <p className="error">{errors.fname}</p>}

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="lname">Last Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="lname" className="form-control"
                     value={values.lname} onChange={handleChange}/>
                </div>
                </div>
                {errors.lname && <p className="error">{errors.lname}</p>}

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="secid">Security Question</label>
                </div>
                <div className="col-sm-8">
                <select className="form-select" id="floatingSelect" name="sec_id" aria-label="Floating label select example" onChange={handleChange}>             
                {
                    questionarray.map((questions)=>(
                      
                        <option key={questions.sec_id} value={questions.sec_id}>{questions.sec_ques}</option>
                      ))}                  
                  </select>
                  </div>
                </div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="answer" >Answer</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="sec_ans" className="form-control" 
                    value={values.sec_ans} onChange={handleChange}/>
                </div>
              </div>
              {errors.sec_ans && <p className="error">{errors.sec_ans}</p>}

              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="contactno">Contact No</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="contactno" className="form-control"
                     value={values.contactno} onChange={handleChange} />
                </div>
              </div>
              {errors.contactno && <p className="error">{errors.contactno}</p>}
             
              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="address">Address</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="address"className="form-control" 
                      value={values.address} onChange={handleChange}/>
                </div>
              </div>
              {errors.address && <p className="error">{errors.address}</p>}
              <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={FormHandle} >Register</Button>
                </div>
           </form>
       </div>
   )
    
}
export default CustomerRegisterFunctional;