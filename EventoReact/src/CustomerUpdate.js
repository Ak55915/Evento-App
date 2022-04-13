import React, { Component } from 'react'

export default class CustomerUpdate extends Component {
   
    constructor(props)
        {
            super(props);

            this.state={
                cust_id:"",
                fname: "",
                lname: "",
                contact_no:"",
                address:"",
                cid:0
                
               
            }
        }
    
    
        handleChange=(e) =>{
            let nm = e.target.name;
            let val = e.target.value;
            this.setState({[nm]: val});
        }
    
        submitReq=(e)=>{
            e.preventDefault();
            //console.log(this.state);
            const reqData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cust_id:this.state.cust_id,
                    fname: this.state.fname,
                    lname: this.state.lname,
                    contact_no: this.state.contact_no,
                    address: this.state.address
                    
                })
            };
    

          
            fetch("http://localhost:8080/updatePro",reqData)
            .then(resp => resp.json())
            .then(data => this.setState({msg:"updated successfully"}));
    
           
            
        
        }
        
        componentDidMount = () =>
             {
                let cid1=JSON.parse(localStorage.getItem("loggedinuser")).cust_id;
                console.log(cid1);
                
                fetch('http://localhost:8080/custinfo/{JSON.parse(localStorage.getItem("loggedinuser")).cust_id}')
                .then(response => response.json())
                .then(data => {this.setState({cust_id: data.cust_id,fname: data.fname,lname:data.lname,contact_no:data.contact_no,address:data.address})
                });
            }
        
    

  render() {
    return (
        <div className="container col-sm-12" >
        <h1><u> Udate Profile</u> </h1>
        <form onSubmit={this.submitReq} >
            <div className="form-group">
            <b>Customer Id :</b> <br/> 
            <input type="text" name="cust_id" value={this.state.cust_id}
            onChange={this.handleChange} disabled className="col-sm-6"  style={{textAlign:'center'}}/> <br/>
            </div>
            <br/>
            <div className="form-group">
            <b>Enter fname :</b><br/>
            <input type="text" name="fname"  value={this.state.fname} 
            onChange={this.handleChange} className="col-sm-6" style={{textAlign:'center' }}/> <br/>
            </div>
            <br/>
            <div className="form-group">
            <b>Enter lname :</b> <br/>
             <input type="text" name="lname" value={this.state.lname}
            onChange={this.handleChange} className="col-sm-6" style={{textAlign:'center'}} /> <br/>
            </div>
            <br/>
            <div className="form-group">
            <b>Enter contact_no :</b><br/>
             <input type="text" name="contact_no" value={this.state.contact_no}
            onChange={this.handleChange} className="col-sm-6" style={{textAlign:'center'}} /> <br/>
            </div>
            <br/>
            <div className="form-group">
            <b>Enter address :</b><br/>
             <input type="text" name="address" value={this.state.address}
            onChange={this.handleChange} className="col-sm-6" style={{textAlign:'center'}} /> <br/> 
            </div>
            <br/>
            <input type="submit" value="Submit" class="btn btn-primary"/>
        </form>
        <br/>
   
    </div>
    )
  }
}
