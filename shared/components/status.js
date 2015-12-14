import React, { Component, PropTypes } from 'react'

export default class Status extends Component {
  render() {
    return (
      <div
        style={{
          textDecoration: this.props.isMatch ? 'line-through' : 'none',
        }}>Current status is: &nbsp;
        {this.props.statusText}
      </div>
    )
  }
}

