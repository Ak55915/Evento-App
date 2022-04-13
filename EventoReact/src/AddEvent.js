import React from 'react'
import { Button,Form,FormGroup,label,InputGroup,Input,CheckBox } from 'react-bootstrap'
export default class AddEvent extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state = {
            ename:"",
            description:"",
            price:"",
            add_on_price:"",
            servicesarray:[],
            services:[false,false,false,false,false,false],
            no_of_guest:""
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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
            ename:this.state.ename, 
            description:this.state.description,
            price:this.state.price,
            add_on_price:this.state.add_on_price,
            services:this.state.services,
            no_of_guest:this.state.no_of_guest
            
  
          })
        };
        fetch("http://localhost:8080/addevent",reqOptions)
        .then(res=>res.json())
        .then(cust => alert(cust.ename));
    }
    
    componentDidMount=()=>
  {
    fetch("http://localhost:8080/fetchservice")
    .then(resp=>resp.json())
    .then(data =>this.setState({servicesarray:data}));

  }
  handleInputChange(event) {
    const target = event.target;
    //let value = target.value;
    let nm=event.target.name;
    let sr=this.state.services;
    if(event.target.checked === true)
        sr[nm-1]=true;
    else
        sr[nm-1]=false;     
    console.log(this.state.services);
    
    
    }
    handleInput=(ev)=>
    {
        const nm = ev.target.name;
        const val = ev.target.value;

        this.setState({[nm]:val});
    }
    render(){
        return(
                
            <div >
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Add Events</h1>

                    <div>
                        <label className="form-label" htmlFor="ename">Enter Event</label>
                    </div>
                    <div>
                            <input type="text" name="ename" className="form-control" 
                            value={this.state.ename} onChange={this.handleInput}/>
                    </div>

                    <div>
                        <label className="form-label" htmlFor="description">Enter Event description</label>
                    </div>
                    <div>
                            <input type="text" name="description" className="form-control" 
                            value={this.state.description} onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="price">Basic Price</label>
                    </div>
                    <div>
                            <input type="text" name="price" className="form-control" 
                            value={this.state.price} onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="add_on_price">Add on price</label>
                    </div>
                    <div>
                            <input type="text" name="add_on_price" className="form-control" 
                            value={this.state.add_on_price} onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="no_of_guest">No of guest</label>
                </div>
                    <div>
                            <input type="text" name="no_of_guest" className="form-control" 
                            value={this.state.no_of_guest} onChange={this.handleInput}/>
                    </div>
                <p>Select Services :</p>
                <div className="checks">
                    <form>     
                    {
                     this.state.servicesarray.map((service) =>(
                     <div className="form-check">
                       <input type="checkbox" name={service.sid} value={service.sid} onChange={this.handleInputChange}/>
                       <label >{service.sname}</label> 
                       </div>               
                    ))}
                

                    </form> 
                    </div>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                   onClick={this.submitData} >Register</Button>
                </div>
                
        </div>              
        )
     }
}