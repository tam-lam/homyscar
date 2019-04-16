



import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import "./admin.css";
import data from"../data/log.json";
import Table from "../components/table";
// class Admin extends Component{
export default function Admin(){
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron title="Admin" subtitle="WELCOME TO ADMIN PAGE!" />
      <div className="Admin"> 
      <div className="item">
    <Table data={data}/>
</div>
</div>
     <Footer />

     </React.Fragment>
  )
}



// export default Admin;



// import React, { Component } from "react";
// import NavBar from "../components/navbar";
// import Jumbotron from "../components/jumbotron";
// import Footer from "../components/footer";
// import "./admin.css";

// class Admin extends Component{
// constructor() {
//   super()
//   this.state = {
//     data: [],
//   }
// }
// componentDidMount() {
//   return fetch('https://facebook.github.io/react-native/movies.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
     
//       this.setState({
//         data:responseJson.movies  //数组的名字
//       })
//       console.log(this.state.data)
//     })
//   }

// render() {
//   return (
//     <React.Fragment>
//       <NavBar />
//       <Jumbotron title="Admin" subtitle="WELCOME TO ADMIN PAGE!" />
//       <div className="Admin"> 
//       <div className="item">
//       <table>
//         <thead>
//           <tr>
//             <th>TITLE</th>
//             <th>YEAR</th>
//             <th>id</th>
//             </tr>
//           </thead>
//     <div>
//       <tbody>
//       {
//         this.state.data.map( (dynamicData,key)=>
//         <div>
//        <tr>
//          <td> 
//             {dynamicData.title}
//           </td>
//           <td>
//              {dynamicData.releaseYear}
//           </td>
//           <td>
            
//             </td>
//           </tr>
//           </div>
          

//         )
//       }
// </tbody>
//     </div></table>
// </div>
// </div>
//      <Footer />

//      </React.Fragment>
//   )
// }
// }

// export default Admin;
