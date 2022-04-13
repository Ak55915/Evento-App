import React from 'react'

export default class VendorUpdate extends  React.Component 
{

            constructor(props)
            {
                super(props);
    
                this.state={
                    v_id:"",
                    vname: "",
                    b_name: "",
                    contact_no:"",
                    address:"",
                    email_id:"",
                    password:"",
                    role:"",
                    sec_ans:"",
                    sec_id:"",
                    login_id:""    
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
                        v_id:this.state.v_id,
                        vname: this.state.vname,
                        b_name: this.state.b_name,
                        contact_no: this.state.contact_no,
                        address: this.state.address,
                        
                        
                    })
                };
        
    
              
                fetch("http://localhost:8080/update",reqData)
                .then(resp => resp.json())
                .then(data => this.setState({msg:"updated successfully"}));
        
               
                
            
            }
            
            componentDidMount = () =>
                 {
                    fetch("http://localhost:8080/getinfo/1")
                    .then(response => response.json())
                    .then(data => {this.setState({v_id: data.v_id,vname: data.vname,b_name:data.b_name,contact_no:data.contact_no,address:data.address})
                    });
                }
            
        
    
    
            render(){
                return(
                    <div className="col-sm-12" >
                        <h1><u> Udate Profile</u> </h1>
                        <form onSubmit={this.submitReq} >
                            <div className="form-group">
                            <b>Vendor Id :</b> <br/> 
                            <input type="text" name="v_id" value={this.state.v_id}
                            onChange={this.handleChange} disabled className="col-sm-6"  style={{textAlign:'center'}}/> <br/>
                            </div>
                            
                            <div className="form-group">
                            <b>Enter Vendor Name :</b><br/>
                            <input type="text" name="vname"  value={this.state.vname} 
                            onChange={this.handleChange} className="col-sm-6" style={{textAlign:'center' }}/> <br/>
                            </div>
                            <br/>
                            <div className="form-group">
                            <b>Enter Compony Name :</b> <br/>
                             <input type="text" name="b_name" value={this.state.b_name}
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
    
    




