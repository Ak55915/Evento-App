import React from 'react';

export default class Report extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            objs : []

        };
    }

    componentDidMount = () => 
    {

         fetch("http://localhost:8080/all")
         .then(response => response.json())
         .then(data => {this.setState({objs:data})
                 //alert(data.length);
            console.log(data);     
         });
     }
 

    render() {
        return(
            <div>
                <h1 className="bg-dark text-white" > Report </h1>

                <table className="col-lg-12 table table-stripped" >
                    <thead className="bg-gray text-dark">
                        <tr>
                            <th >Request ID</th>
                            <th>Request Status</th>
                            <th >Customer ID</th>
                            <th >Vendor ID</th>
                            <th >Event ID</th>
                            <th >Date of Event</th>
                            <th >Budget</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                                this.state.objs.map(
                                obj => {
                                    return(<tr>
                                        <td>{obj.req_id}</td>
                                        <td>{obj.status}</td>
                                        <td>{obj.cust_id}</td>
                                        <td>{obj.v_id}</td>
                                        <td>{obj.eid}</td>
                                        <td>{obj.date_time}</td>
                                        <td>{obj.budget}</td>
                                      
                                    </tr>)
                                })
                        }
                    </tbody>
                </table>    
            </div>
        );
    }    
}


 