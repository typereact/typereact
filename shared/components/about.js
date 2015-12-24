import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import editorApp from '../reducers/reducers.js';
import $ from 'jquery';

export default class About extends Component {

  render() {

    return <div className="container">
      <h3>Meet The TypeReact Team</h3>
      <h6>TypeReact was created by four software engineers at MakerSquare Los Angeles.</h6>
      <div className='row row-spacer'></div>
      <h4>Chelsea Cheung</h4>
      <h6>Insert Bio Here</h6>
      <div className='row row-spacer'></div>
      <h4>Marc Reicher</h4>
      <h6>Insert Bio Here</h6>
      <div className='row row-spacer'></div>
      <h4>Nick Krein</h4>
      <h6>Insert Bio Here</h6>
      <div className='row row-spacer'></div>
      <h4>Tim Lai</h4>
      <h6>Insert Bio Here</h6>
      <div className='row row-spacer'></div>
    </div>
  }

}