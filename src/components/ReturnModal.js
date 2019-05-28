import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { notifyReturnSucceed } from "./ToastContent";
import UserDetail from "../components/UserDetail";
import Script from 'react-load-script';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class ReturnModal extends Component {
  // Declare State
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }

  handleScriptLoad() { 
    // Declare Options For Autocomplete 
    alert('script loaded')
    console.log('laoding script laod')
    var options = { types: ['(cities)'] }; 
    
    // Initialize Google Autocomplete 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById('autocomplete'),
                          options ); 
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed',
                                  this.handlePlaceSelect); 
  }

  handlePlaceSelect() {

    
    console.log('laoding')
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    alert(address)
    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }
  render() {
    return (
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg&libraries=places" onLoad={this.handleScriptLoad}  />,
        <MuiThemeProvider>
      <React.Fragment>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="modal-title">Return</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container text-center">
              <div>
                <h1 className="display-3 font-weight-bold">Total</h1>

                <h1 className="display-3 font-weight-bold">$123</h1>
                <h4>UserName</h4>
                <p>Booked on: Sat May 25 2019 at 2:29:18 pm</p>
              </div>

              <div className="text-left">
                <div className="row">
                  <div className="col-lg-6">
                    <UserDetail title="Total Time" content="123h" />
                  </div>
                  <div className="col-lg-6">
                    <UserDetail title="Pricing" content="12$/h" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <UserDetail title="Return Date" content="Sat May 25 2019" />
                  </div>
                  <div className="col-lg-6">
                    <UserDetail title="Return Time" content="2:29:18 pm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-search">
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
          </Modal.Body>

          <Modal.Footer className="bg-success modal-footer shadow-lg">
            <Link
              className="btn btn-block rent-btn bg-success text-light shadow-lg"
              to={{
                pathname: "/"
              }}
              onClick={() => {
                notifyReturnSucceed();
              }}
            >
              Return
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ReturnModal;
