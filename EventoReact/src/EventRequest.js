import React from 'react'

import { Button } from 'react-bootstrap'

export default class EventRequest extends React.Component
{
  
    constructor(props)
    {
        super(props);
        this.state = {
            eventarray:[],
            services:[],
            servicesarray:[],
            eid:0,
            guest:0,
            budget:0,
            location:"",
            eventrequest:[],
          eventbudgetarray:[],
          cust_id:"",
          date_time:"",
          errors:
            {
                dateerror:"",            
        },
          datevalid:false
      }
        this.test = this.test.bind(this);
       
    }
    
   
  //fetch the event related data
componentDidMount()
{
 // alert(localStorage.getItem("loggedinuser"));
  const custid=JSON.parse(localStorage.getItem("loggedinuser"));

  const customerid=custid.cust_id;
  console.log(customerid);
  this.setState({cust_id:customerid});
  
     
    console.log(this.state.cust_id);
    fetch("http://localhost:8080/fetchevent")
    .then(resp=>resp.json())
    .then(data =>this.setState({eventarray:data},console.log(data)));

}

//get services of  events according to the events
test(e)
{
  debugger
   const nm = e.target.name;
    const val = e.target.value;
    this.setState({[nm]:val}); 
    console.log(this.state.eid) 
  const reqOptions = 
  {
    method: 'GET',
    headers: {
      'Content-Type':'application/json'
    }
  };
fetch('http://localhost:8080/getdetails?eid='+this.state.eid,reqOptions)
.then(resp=>resp.json())
.then(data =>this.setState({servicesarray:data}));

}


submitData =(ev)=>{
  //debugger
  ev.preventDefault();
  console.log(this.state)
  const reqOptions = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      location:this.state.location,
      date_time:this.state.date_time,
      eid:this.state.eid,
      guest:this.state.guest,
      budget:this.state.budget,
      cust_id:this.state.cust_id,
    })
  };
  fetch("http://localhost:8080/registerrequest",reqOptions)
  .then(res=>res.json())
  .then(cust => alert(cust.emailid));
}


 handleInput=(e)=>
  { 
    const nm = e.target.name;
    const val = e.target.value;
    this.setState({[nm]:val});
      //const dateregexp = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;


    //current date manipulation
      const d = new Date();
      let month = d.getMonth() + 1;
      let day=d.getDate();
      let year=d.getFullYear();

    //text box date splitting
    const edate = new Date(this.state.date);
   //console.log(edate);
    var month1=edate.getMonth() + 1;
    let day1=edate.getDate();
    let year1=edate.getFullYear();

 
    

   let dateflag = this.state.datevalid;
   let errors = this.state.errors;
    
   
   /*switch(nm)
    {
      case 'date':
          if((month1==month && year1==year && (day-day1)==5))
          {
            
            errors.dateerror="";
            dateflag=true;
          }
          else
          {
            
            errors.dateerror = "enter valid date ";
            dateflag = false;           
          }
    }*/
     
  }

   calcBudget=(e)=> { 
    console.log(this.state.guest) 
    this.state.eventarray.forEach(event => {
          if(event.eid == this.state.eid)
          {
             let price = event.price;
             let no = event.no_of_guest;
             let addon = event.add_on_price;
             console.log(price+ ": "+ no +" : "+addon)
             const calBudget = price + ((this.state.guest - no) * addon );
             console.log(calBudget);
             this.setState({budget: calBudget});
          }
      })
   }
    render(){
        return(           
         
            <form>
             <h1>Event Request form</h1> <br/>
              <div className="row">
              <div className="col-sm-4 ">
                   <label className="form-label" htmlFor="location">Event Location</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="location" className="form-control" placeholder="Enter Location within Pune City" 
                     value={this.state.location} onChange={this.handleInput} />
                </div>
              </div>
                       
              <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="date_time">Date of Event</label>
                </div>
                <div className="col-sm-8">
                    <input type="date" name="date_time" className="form-control" placeholder="enter date mm/dd/yyyy format"
                     value={this.state.date_time} onChange={this.handleInput} />
                </div>
                </div>
                

                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="eid">Select Event</label>
                </div>
                <div className="col-sm-8 ">
                <select onChange={(e)=>{this.test(e)}} className="form-select" id="floatingSelect" name="eid" aria-label="Floating label select example">
                <option value="0">Select event</option>
                 {                  
                    this.state.eventarray.map((events) =>
                      
                        <option key={events.eid} value={events.eid} >{events.ename}</option>
                      
                     )    
                 } 
                  </select>
                  </div>
                </div>

                <div className="row">
                <p>Allot Services :</p>                      
                    {
                     this.state.servicesarray.map((service) =>(
                     <div className="d-flex justify-content-center">
                       <input type="checkbox" name ="services"value="{service.sid}" checked/>
                       <label >{service.sname}</label> 
                       </div>               
                     ))}
                </div>
         
                <div className="row">
                <div className="col-sm-4">
                   <label className="form-label" htmlFor="guest" aria-disabled>add on guest</label>
                </div>
                <div className="col-sm-8">
                    <input type="text" name="guest" className="form-control"                 
                   value={this.state.guest} onChange={this.handleInput}  /> <br/>
                </div>
                </div>
                <div className="d-flex justify-content-center text-danger"> <label>(*Click on button to see final cost)</label></div>
                <div className="d-flex justify-content-center"><input className="btn btn-outline-warning  "type="button" onClick={this.calcBudget} value="Show Cost"/> </div>
               
                <div className="d-flex justify-content-center">Rs.{this.state.budget}</div><br/>
              <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={this.submitData} >Register</Button>
                </div>

                
              </form>
          
      )
    }
}