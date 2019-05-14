import React, { Component } from "react";
const UserDetail = props => {
  return (
    <React.Fragment>
      <h4>
        <strong>{props.title}: </strong>{" "}
      </h4>
      <p> {props.content}</p>{" "}
    </React.Fragment>
  );
};
export default UserDetail;
