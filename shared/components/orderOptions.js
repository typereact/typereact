import React from "react";
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js'
import MenuItem from 'react-bootstrap/lib/MenuItem.js'
import editorApp from '../reducers/reducers.js';


class completedChallengesTable extends Component {
  render() {
    return <div id='order-options'>
    Order By:
    <DropdownButton title={this.props.orderOptions} id='bg-justified-dropdown'>
      // <MenuItem eventKey="1" onSelect={this.props.changeOrderOptions}>Key stroke</MenuItem>
      // <MenuItem eventKey="1" onSelect={this.props.changeOrderOptions}>Time</MenuItem>
    </DropdownButton>
    </div>
  }
}

// completedChallengesTable.propTypes = {
// }

function mapStateToProps(state) {
  return {
    orderOptions: state.profilePageState.orderOptions
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    changeOrderOptions: function () {
      dispatch(changingOrderOptions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(completedChallengesTable)