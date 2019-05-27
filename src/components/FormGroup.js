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
          ref={this.props.name}
          class="form-control form-input text-light form-control-lg"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default FormGroup;
