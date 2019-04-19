import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            <a href="https://github.com/Abdosalah/ProgProject2019Sem2">
              {" "}
              Team 0
            </a>{" "}
            &#169; {new Date().getFullYear()} - RMIT Project 1 2019
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
