import React from 'react'

import './mystyle.css'


export default class VendorRegistration extends React.Component
{
  constructor(props)
    {
        super(props);
        this.state = {
            emailid:"",
            pwd:"",
            vname:"",
            bname:"",
            secid:0,
            sec_ans:"",
            contactno:"",
            address:"",
            questionarray:[],
            errors:
            {
                emailiderror:"",
                pwderror:"",
                vnameerror:"",
                bnameerror:"",
                sec_anserror:"",
                contactnoerror:"",
                addresserror:""
            },
            emailidvalid:false,
            pwdvalid:false,
            vnamevalid:false,
            bnamevalid:false,
            sec_ansvalid:false,
            contactnovalid:false,
            addressvalid:false,
            formvalid:false

        }
        
    }    
    submitData =(ev)=>{
      alert("call");
      ev.preventDefault();
      console.log(this.state)
      const reqOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
          
        },
        body:JSON.stringify({
          emailid:this.state.emailid,
          pwd:this.state.pwd,
          vname:this.state.vname,
          bname:this.state.bname,
          secid:this.state.secid,
          sec_ans:this.state.answer,
          contactno:this.state.contactno,
          address:this.state.address

        })
      };
      fetch("http://localhost:8080/vendorregister",reqOptions)
      .then(res=>res.json())
      .then(cust => alert(cust.emailid));  
  }

  componentDidMount=()=>
  {
    fetch("http://localhost:8080/allquestions")
    .then(resp=>resp.json())
    .then(data =>this.setState({questionarray:data}));

  }
  secid=(e)=>{
      this.setState({secid:e.target.value});
  }

  handleInput=(ev)=>{
    const emailidregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{3}$/;
    const pwdregexp =/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]{8,}/;
    const bnameregexp=/[a-zA-Z][a-zA-Z ]*/;
    const vnameregexp=/[a-zA-Z][a-zA-Z ]*/;
    const answerregexp=/^[a-zA-Z]*$/;
    const contactnoregexp = /^[0-9]{10}/;
    const addressregexp=/^[a-zA-Z0-9\s,.'-]{3,}$/


    const nm = ev.target.name;
    const val = ev.target.value;

    let errors = this.state.errors;
    let emailidflag = this.state.emailidvalid;
    let pwdflag = this.state.pwdvalid;
    let vnameflag=this.state.vnamevalid;
    let bnameflag=this.state.bnamevalid;
    let sec_ansflag=this.state.answervalid;
    let contactnoflag=this.state.contactnovalid;
    let addressflag=this.state.addressvalid;

    switch(nm)
     {
        case 'emailid':
            if(!emailidregexp.test(val))
             {
                errors.emailiderror = "Emailid is required";
                emailidflag = false;
            }
             else
            {
                errors.emailiderror = "";
                emailidflag=true;
            }    
            break;

            case 'pwd':
              if(!pwdregexp.test(val))
               {
                  errors.pwderror = "Password is reuired!";
                  pwdflag = false;
              }
               else
              {
                  errors.pwderror = "";
                  pwdflag=true;
              }    
              break; 

              case 'vname':
                if(!vnameregexp.test(val))
                {
                  errors.vnameerror = "Vendor full name is required";
                  vnameflag = false;
                }
                else
                {
                  errors.vnameerror = "";
                  vnameflag=true;
                }
                break; 

                case 'bname':
                  if(!bnameregexp.test(val))
                  {
                    errors.bnameerror = "Business Name is required";
                    bnameflag = false;
                  }
                  else
                  {
                    errors.bnameerror = "";
                    bnameflag=true;
                  }
                  break; 

                  case 'sec_ans':
                  if(!answerregexp.test(val))
                  {
                    errors.answererror = "Security Question Answer is required";
                    sec_ansflag = false;
                  }
                  else
                  {
                    errors.answererror = "";
                    sec_ansflag=true;
                  }
                  break; 
            case 'contactno':
            if(!contactnoregexp.test(val))
             {
                errors.contactnoerror = "Contact Number is required";
                contactnoflag = false;
            }
             else
            {
                errors.contactnoerror = "";
                contactnoflag=true;
            }
            break;

            case 'address':
            if(!addressregexp.test(val))
             {
                errors.addresserror = "Address is required";
                addressflag = false;
            }
             else
            {
                errors.addresserror = "";
                addressflag=true;
            }    
            break;
            default:

      }
      this.setState({[nm]:val});
  }
    render(){
        return(           
         
          <div className="container d-flex justify-content-center">
             
            <form>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Vendor Registration form</h1>
  
              <div className="row">
              <div className="col-sm-4 ">
                   <label className="text-dark" htmlFor="emailid">Your Email</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="emailid" className="form-control" 
                    value={this.state.emailid} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.emailiderror}</div>
              
              <div className="row">
                <div className="col-sm-4">
                   <label  className="text-dark" htmlFor="pwd">Password</label>
                </div>
                <div className="col-sm-8">
                    <input type="password" name="pwd" className="form-control"
                     value={this.state.pwd} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.pwderror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="vname">Full Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="vname" className="form-control"
                    value={this.state.vname} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.vnameerror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="bname">Business Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="bname" className="form-control"
                    value={this.state.bname} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.bnameerror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark" htmlFor="sec_id">Security Question</label>
                </div>
                <div className="col-sm-8">
                <select className="form-select" id="floatingSelect" name="secid" aria-label="Floating label select example" onChange={this.handleInput}>
                 {
                    this.state.questionarray.map(questions =>
                      {
                        return(<option key={questions.sec_id} value={questions.sec_id}>{questions.sec_ques}</option>)
                      })       
                 } 
                  </select>
                  </div>
                </div>
                
                <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="answer">Answer</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="answer" className="form-control" 
                    value={this.state.answer} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.answererror}</div>
              

              <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="contactno">Contact No</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="contactno" className="form-control"
                     value={this.state.contactno} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.contactnoerror}</div>

              <div className="row">
                <div className="col-sm-4">
                   <label className="text-dark"  htmlFor="address">Address</label>
                </div>
                <div className="col-sm-8">
                    <input type="textarea" name="address"className="form-control" 
                     value={this.state.address} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.addresserror}</div>
              
              
              <input type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={this.submitData} value="Register" />
               
              </form>
          </div>
          
      )
    }
}