import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class CarTable extends Component{
    constructor() {
        super()
        this.state = {
          data: [],
        }
      }
      componentDidMount() {
        return fetch('http://localhost:3001/car')
          .then((response) => response.json())
          .then((responseJson) => {
           
            this.setState({
              data:responseJson  //数组的名字
            })
            console.log(this.state.data)
          })
        }
        render(){

    return(
        <div className="table">
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

      {
        this.state.data.map( (dynamicData,key)=>
        
       <tr>
         <td> 
            {dynamicData._id}
          </td>
          <td>
             {dynamicData.make}
          </td>
          <td>
             {dynamicData.rego}
          </td>
          <td>{dynamicData.model}
         </td>
         <td>{dynamicData.year}
         </td>
        <td>{dynamicData.body}
         </td>
         <td>{dynamicData.transmission}
         </td>
         <td >{dynamicData.address}
         </td>
         
         <td>{dynamicData.price}
         </td>


          </tr>
      
        )        
      }

                    </tbody>
            </Table>
            </div>

    );

}
}export default CarTable;