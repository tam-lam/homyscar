import React from "react";
import "./table.css";

export default function Table(props) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th> RentalId</th>
            <th>UserId</th>
            <th> Car_rego</th>
            <th> BookingDate</th>
            <th>ReturnDate</th>
            <th>ReturnLocation</th>
            <th>TotalPrice</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(row => (
            <tr>
              <td>{row.rentalid}</td>
              <td>{row.userid}</td>
              <td>{row.car_rego}</td>
              <td>{row.bookingdate}</td>
              <td>{row.returndate}</td>
              <td>{row.returnLocation}</td>
              <td>{row.TotalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
