import React from "react";
import ReactDOM from 'react-dom';
import { Component } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton.js'
import MenuItem from 'react-bootstrap/lib/MenuItem.js'

export default class completedChallenges extends Component {
  // componentDidMount() {
  //   $get('/userChallenge/profileStats', this.props.currentUserId, function(results) {
  //     results.
  //   })
  // },
  render() {
    return <div>
    <DropdownButton title="Completed Challenges" id="bg-justified-dropdown">
      <MenuItem className='menu-item' eventKey="1">Dropdown link</MenuItem>
      <MenuItem className='menu-item' eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    </div>
  }
}

// mapStateToProps 