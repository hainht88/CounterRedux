import React, { Component } from "react";
import { connect } from "react-redux";
import { add, decrease } from "../redux/actions";

const mapStateToProps = state => ({ value: state.counterReducer.value });

export default connect(mapStateToProps)(
  class Counter extends Component {
    render() {
      return (
        <div className="container mt-4 d-flex">
          <div className="card w-25 mx-auto">
            <h1 className="card-header text-center">{this.props.value}</h1>
            <div className="card-body btn-group">
              <button
                className="btn btn-primary"
                onClick={() => this.props.dispatch(add())}
              >
                +
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.props.dispatch(decrease())}
              >
                -
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);
