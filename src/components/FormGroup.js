import React, { Component } from "react";
class FormGroup extends Component {
  render() {
    return (
      <div class="form-group">
        <label className="font-weight-bold text-light form-label shadow-lg">
          {this.props.label}
        </label>
        <input
          type={this.props.inputType}
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          class="form-control form-input text-light form-control-lg"
          
        />
      </div>
    );
  }
}

export default FormGroup;
