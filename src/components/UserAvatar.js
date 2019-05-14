import React, { Component } from "react";
class UserAvatar extends Component {
  render() {
    return (
      <div className="container avatar-container text-center">
        <img
          src={this.props.userImg}
          height="90"
          width="90"
          className="shadow-lg rounded-circle "
          alt="carimage"
        />
        <span class="text-truncate" style={{ maxWidth: 100 }}>
          <h3 className="font-weight-bold username text-truncate ">
            {this.props.userName}
          </h3>
        </span>
      </div>
    );
  }
}

export default UserAvatar;
