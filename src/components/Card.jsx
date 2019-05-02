import React, { Component } from "react";
import { connect } from "react-redux";

import { increase, decrease, remove } from "../redux/actions";

class Card extends Component {
  render() {
    const { increase, decrease, remove, counter } = this.props;

    return (
      <div className="card w-25 mx-auto my-3">
        <h1 className="card-header text-center">{counter.value}</h1>
        <div className="card-body btn-group">
          <button
            className="btn btn-primary"
            onClick={() => increase(counter.id)}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => decrease(counter.id)}
          >
            <i className="fa fa-minus" />
          </button>
          <button className="btn btn-danger" onClick={() => remove(counter.id)}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increase: id => dispatch(increase(id)),
  decrease: id => dispatch(decrease(id)),
  remove: id => dispatch(remove(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
