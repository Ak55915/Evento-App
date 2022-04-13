import React from 'react'

import { Button} from 'react-bootstrap'

export default class CustomerRegistration extends React.Component
{
  constructor(props)
    {
        super(props);
        this.state = {
            emailid:"",
            pwd:"",
            fname:"",
            lname:"",
            sec_id:0,
            sec_ans:"",
            contactno:"",
            address:"",
            questionarray:[],
            errors:
            {
                emailiderror:"",
                pwderror:"",
                fnameerror:"",
                lnameerror:"",
                answererror:"",
                contactnoerror:"",
                addresserror:""
            },
            emailidvalid:false,
            pwdvalid:false,
            fnamevalid:false,
            lnamevalid:false,
            answervalid:false,
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
          fname:this.state.fname,
          lname:this.state.lname,
          secid:this.state.secid,
          answer:this.state.answer,
          contactno:this.state.contactno,
          address:this.state.address

        })
      };
      fetch("http://localhost:8080/register",reqOptions)
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
    const fnameregexp=/^[A-Z]+[a-zA-Z]*$/;
    const lnameregexp=/^[A-Z]+[a-zA-Z]*$/;
    const answerregexp=/^[a-zA-Z]*$/;
    const contactnoregexp = /^[0-9]{10}/;
    const addressregexp=/^[a-zA-Z0-9\s,.'-]{3,}$/


    const nm = ev.target.name;
    const val = ev.target.value;

    let errors = this.state.errors;
    let emailidflag = this.state.emailidvalid;
    let pwdflag = this.state.pwdvalid;
    let fnameflag=this.state.fnamevalid;
    let lnameflag=this.state.lnamevalid;
    let answerflag=this.state.answervalid;
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

              case 'fname':
                if(!fnameregexp.test(val))
                {
                  errors.fnameerror = "First Name is required";
                  fnameflag = false;
                }
                else
                {
                  errors.fnameerror = "";
                  fnameflag=true;
                }
                break; 

                case 'lname':
                  if(!lnameregexp.test(val))
                  {
                    errors.lnameerror = "Last Name is required";
                    lnameflag = false;
                  }
                  else
                  {
                    errors.lnameerror = "";
                    lnameflag=true;
                  }
                  break; 

                  case 'answer':
                  if(!answerregexp.test(val))
                  {
                    errors.answererror = "Security Question Answer is required";
                    answerflag = false;
                  }
                  else
                  {
                    errors.answererror = "";
                    answerflag=true;
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
         
            <form>
             <h1>Customer Registration form</h1>
              <div className="row">
              <div className="col-sm-4 ">
                   <label className="form-label" htmlFor="emailid">Your Email</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="emailid" className="form-control" 
                    value={this.state.emailid} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.emailiderror}</div>
              
              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="pwd">Password</label>
                </div>
                <div className="col-sm-8">
                    <input type="password" name="pwd" className="form-control"
                     value={this.state.pwd} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.pwderror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="fname">First Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="fname" className="form-control"
                    value={this.state.fname} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.fnameerror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="lname">Last Name</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="lname" className="form-control"
                    value={this.state.lname} onChange={this.handleInput} />
                </div>
                </div>
                <div className="text-danger">{this.state.errors.lnameerror}</div>

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="secid">Security Question</label>
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
                   <label className="form-label" htmlFor="answer">Answer</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="answer" className="form-control" 
                    value={this.state.answer} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.answererror}</div>
              

              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="contactno">Contact No</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="contactno" className="form-control"
                     value={this.state.contactno} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.contactnoerror}</div>

              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="address">Address</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="address"className="form-control" 
                     value={this.state.address} onChange={this.handleInput} />
                </div>
              </div>
              <div className="text-danger">{this.state.errors.addresserror}</div>

              <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={this.submitData} >Register</Button>
                </div>
              </form>
          
      )
    }
}