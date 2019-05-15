import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'

class UserItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        {/* <Link to={`/admin/${this.state.item._id}`}>  */}
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                        <th> UserId
                        </th>
                        <th>LicenseNo
                        </th>
                        <th> FirstName
                        </th>
                        <th> LastName
                        </th>
                        <th>Email
                        </th> 
                        <th>DateOfBirth
                        </th> 
                        <th>PaymentDetails
                        </th>  
                
                    </tr>
                </thead>
                
          <tbody>
       <tr>
         <td> 
            {this.state.item.id}
          </td>
          <td>
             {this.state.item.licenseNo}
          </td>
          <td>
             {this.state.item.firstName}
          </td>
          <td>{this.state.item.lastName}
         </td>
         <td>{this.state.item.dateOfBirth}
         </td>
        <td>{this.state.item.paymentDetail}
         </td> 
          </tr>


                    </tbody>
            </Table>





       
        {/* </Link> */}
      </li>
    )
  }
}

export default UserItem;