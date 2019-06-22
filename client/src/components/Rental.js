import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRental } from "../store/actions/rentalActions";
import RentalItem from "./RentalItem";
import { isEmpty } from "../util/validationHelpers";

import { notifyReturnSucceed } from "./ToastContent";
import ReturnModal from "./ReturnModal";
class Rental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      mockItem: {
        _id: '5d071c48d35a8742704dffb5',
        booking_date: "23102301",
        car_rego:"ABC123",
        user_id:"5d061bf1319857332cba3983",
        on_rent:true,
        created_at: "2019-06-17T04:51:20.280+00:00",
        updated_at: "2019-06-17T04:51:20.280+00:00"
      }
    };
  }

    componentDidMount() {
        if (this.props.currentUser) {
            alert(this.props.currentUser._id)
          this.props.onFetchRental(this.props.currentUser._id);
        //  this.props.onFetchRental('5d061bf1319857332cba3983');
          
        }
    }
    

  render() {
    // var rental1 = {
    //   booking_date: "2019-05-25T04:29:18.579Z",
    //   _id: "5ce8c4c5ded7273b7aaa2a80",
    //   car_rego: "PKJ837",
    //   user_id: "5ce8a3b4e8beb52f4b797dea",
    //   on_rent: true,
    //   created_at: "2019-05-25T04:29:57.950Z",
    //   updated_at: "2019-05-25T04:29:57.950Z",
    //   __v: 0
    // };
    let modalClose = () => this.setState({ modalShow: false });
    let modalShow = () => {
      this.setState({ modalShow: true });
    };
    if (this.props.rentals !== null) {
      var rentalItems = this.props.rentals.map(item => (
        <RentalItem
          key={item._id}
          rental={item}
          onReturn={this.props.onReturn}
          onShowDetail={modalShow}
        />
      ));
    }

    //   var rentalItems = 
    //     <RentalItem
    //       key={'5d071c48d35a8742704dffb5'}
    //       rental={this.state.mockItem}
    //       onReturn={this.props.onReturn}
    //       onShowDetail={modalShow}
    //     />
    
    return (
      <React.Fragment>
        <ReturnModal show={this.state.modalShow} onHide={modalClose} />

        <div className="tab-content-container">
          <h1 className="display-3">Rentals</h1>
          {isEmpty(rentalItems) ? (
            <p className="text-muted">No rental record found</p>
          ) : (
            rentalItems
          )}
          {/* <RentalItem
            key={rental1._id}
            rental={rental1}
            onReturn={this.props.onReturn}
            onShowDetail={modalShow}
          /> */}
        </div>
      </React.Fragment>
    );
  }
}
function mapPropsToState(state) {
  return {
    currentUser: state.auth.user,
    rentals: state.rentals.fetchedRentals
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRental: user_id => {
      dispatch(fetchRental(user_id));
    },
    onReturn: () => {
      //return item...//

      //display notification on home page
      notifyReturnSucceed();
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Rental);
