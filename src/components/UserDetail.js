import React from "react";
import { isEmpty } from "../util/validationHelpers";
const UserDetail = props => {
  return (
    <React.Fragment>
      <div style={detailStyle}>
        <h4>{props.title} </h4>{" "}
        {!isEmpty(props.content) ? (
          <p>{props.content} </p>
        ) : (
          <p className="text-muted">N/A</p>
        )}{" "}
      </div>
    </React.Fragment>
  );
};
export default UserDetail;
const detailStyle = {
  borderLeft: "1px solid #868e96 ",
  paddingLeft: "1em",
  margin: "1em"
};
