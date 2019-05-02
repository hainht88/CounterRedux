import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../redux/actions";

import Card from "./Card";

class Cards extends Component {
  render() {
    const { counters, add } = this.props;
    console.log(counters);
    return (
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={() => add()}>
          Add Counter
        </button>
        {counters.map(counter => (
          <Card key={counter.id} counter={counter} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ counters: state.counterReducer });
const mapDispatchToProps = dispatch => ({ add: () => dispatch(add()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
