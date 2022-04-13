import React, { useEffect, useState } from 'react'

export default function ViewRequest() {
  let vid= localStorage.getItem("loggedinuser").v_id;
  let status="true";
  const[eventRequest,setEventRequest]=useState({
    req_id:"",
    status:"",
    v_id:""
  });
  const [items, setItems] = useState([]);
   useEffect(()=>{
    const url='http://localhost:8080/allrequest';
    fetch(url).then(resp=> resp.json())
    .then(resp=>setItems(resp))
   },[]) 

   

  const [req_id,setReq_Id]=useState();
   

   const submitData =(ev)=>{
     

   }
    
   
  return (
      <>
    <div className="container text-center">
      <h1>Customer Request</h1>
      <table className="table table-bordered">  
            <tr>  
              <th >Request ID</th>
                <th>Event ID</th>  
                <th>Date</th>  
                <th>Location</th> 
                <th>Budget</th> 
                <th>Guests</th>
                <th>Action</th>
            </tr>  
    
            {items.map((item, index) => (  
              <tr data-index={index}> 
              <td></td> 
                <td>{item.eid}</td>  
                <td>{item.date_time}</td>  
                <td>{item.location}</td> 
                <td>{item.budget}</td> 
                <td>{item.guests}</td>  
                <td><button className="btn btn-outline-warning  " type="button" onClick={submitData}>Accept</button></td>
              </tr>  
            ))}  
    
        </table> 

    </div>
    
    
    

    </>
  )
}
