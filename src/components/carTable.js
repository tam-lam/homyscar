// import React, { Component } from "react";
// import Table from 'react-bootstrap/Table'
// import axios from 'axios';
// import Link from 'react-router-dom'


// class CarTable extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//           // cars: [],
//           cars:''
//         }
//       }
//       componentDidMount() {
//         this.getCars();
//         }
//         getCars(){
//           let carId= this.props.match.params._id;
//           axios.get(`http://localhost:3001/car/${carId}`)
//           .then(response =>{
//             this.setState({cars:response.data},()=>{
//               console.log(this.state);
//             })
//           }).catch(err => console.log(err));
//         }
      
//        onDelete(){
//          let carId= this.state.cars._id;
//          axios.delete(`http://localhost:3001/car/${carId}`)
//         .then(response=>{
//           this.props.history.push('/');

//         }).catch(err => console.log(err));

// }

//         render(){
         

//     return(
//       <Link className="btn grey" to="/">Back</Link>
//         <div className="table">
//         <Table striped bordered hover variant="dark">
//             <thead>
//                 <tr>
//                         <th> car._id
//                         </th>
//                         <th>car.make
//                         </th>
//                         <th> Car_rego
//                         </th>
//                         <th> car.model
//                         </th>
//                         <th>car.year
//                         </th> 
//                         <th>car.body
//                         </th> 
//                         <th>car.transmission
//                         </th>  
//                         <th>car.address
//                         </th>  
//                         <th>car.price
//                         </th>  
//                         <tr>Action
//                          </tr>
                       
//                     </tr>
//                 </thead>
                
//                 <tbody>

//                 {this.state.cars.map( cars=>
        
//        <tr key={cars.make}>
//          <td> 
//             {cars._id}
//           </td>
//           <td>
//              {cars.make}
//           </td>
//           <td>
//              {cars.rego}
//           </td>
//           <td>{cars.model}
//          </td>
//          <td>{cars.year}
//          </td>
//         <td>{cars.body}
//          </td>
//          <td>{cars.transmission}
//          </td>
//          <td >{cars.address}
//          </td>
         
//          <td>{cars.price}
//          </td>
//            <td>
        
//            <Link className="btn" to={`/car/edit/${this.state.cars._id} `}>Edit</Link>
           
//            <button  onClick={this.onDelete.bind(this)} className="btn red right"
//            > Delete</button>

          
//          </td>


//           </tr>
      
//         )        
//       }

//                     </tbody>
//             </Table>
//             </div>

//     );}
// }export default CarTable;



// //  //update

//       //  update(e) {
//       //   e.preventDefault();
//       //   const cars = {
//       //      id:this.state.cars._id,
//       //     make: this.state.cars.make,
//       //     rego:this.state.cars.rego,
//       //     modle:this.stae.cars.modle,
//       //     year:this.state.cars.year,
//       //     body:this.stae.cars.body
//       //   }
//       //   axios.put('http://localhost:3001/car/update/{this.state.cars.make}', cars)
//       //   .then(res => console.log(res.data));}

      
//       //   handleDel (cars) {
//       //     const confirmed = window.confirm(`Are you sure you to delete the car ${cars._id} ?`);
//       //     if (confirmed) {
//       //       axios.put('http://localhost:3001/car' + cars._id, {
//       //         method: 'delete'
//       //       })
//       //       .then(res => res.json())
//       //       .then(res => {
//       //         this.setState({
//       //           carsList: this.state.carsList.filter(item => item.id !== cars.id)
//       //         });
//       //         alert('Delete successful!');
//       //       })
//       //       .catch(err => {
//       //         console.error(err);
//       //         alert('Delete failure');
//       //       });
//       //     }
//       //   }