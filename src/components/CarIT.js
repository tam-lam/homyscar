import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'

class CarIT extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/car/${this.state.item._id}`}> 
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                        <th> car._id
                        </th>
                        <th>car.make
                        </th>
                        <th> Car_rego
                        </th>
                        <th> car.model
                        </th>
                        <th>car.year
                        </th> 
                        <th>car.body
                        </th> 
                        <th>car.transmission
                        </th>  
                        <th>car.address
                        </th>  
                        <th>car.price
                        </th>  
                       
                    </tr>
                </thead>
                
          <tbody>
       <tr>
         <td> 
            {this.state.item._id}
          </td>
          <td>
             {this.state.item.make}
          </td>
          <td>
             {this.state.item.rego}
          </td>
          <td>{this.state.item.model}
         </td>
         <td>{this.state.item.year}
         </td>
        <td>{this.state.item.body}
         </td>
         <td>{this.state.item.transmission}
         </td>
         <td >{this.state.item.address}
         </td>
         
         <td>{this.state.item.price}
         </td>
       
          </tr>
      
        {/* )        
      } */}

                    </tbody>
            </Table>





       
        </Link>
      </li>
    )
  }
}

export default CarIT;