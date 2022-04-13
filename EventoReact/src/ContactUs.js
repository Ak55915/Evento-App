import React from 'react'

import './mystyle.css'


export default class ContactUs extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            emailid:"",
            FullName:"",
            contactno:"",
            address:"",
            businessName:"",
        }

    }    
    render(){
        return(           
         
          <div className="container ">
            <div>         
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Contact Us<br/><h6>(want to become vendor in our portal)</h6></h1>
            </div>
                                   
            <form>

            <div className="row">
              <div className="col-sm-4 ">
                   <label className="text-dark" htmlFor="emailid">Your Email</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="emailid" className="form-control" 
                    value={this.state.emailid}  />
                </div>
              </div>

              <div className="row">
              <div className="col-sm-4 ">
                   <label className="text-dark" htmlFor="FullName">Full Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="FullName" className="form-control" 
                    value={this.state.FullName}  />
                </div>
              </div>

              <div className="row">
              <div className="col-sm-4 ">
                   <label className="text-dark" htmlFor="businessName">Business Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="businessName" className="form-control" 
                    value={this.state.businessName} />
                </div>
              </div>
              
              <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="address">Address</label>
                </div>
                <div className="col-sm-8">
                    <input type="textarea" name="address"className="form-control" 
                     value={this.state.address}  />
                </div>
              </div>                
              <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="contactno">Contact No</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="contactno" className="form-control"
                     value={this.state.contactno}  />
                </div>
              </div>
                      
              <input type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={this.submitData} value="Register" />
               
              </form>
          </div>
          
      )
    }

}