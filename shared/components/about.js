import React from 'react';
import { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import editorApp from '../reducers/reducers.js';
// import $ from 'jquery';

export default class About extends Component {

  render() {

    return (
      <div className="container">
        <h2 className="about-title">Meet The TypeReact Team</h2>
        <h5 className="about-minititle">[ TypeReact was created by four software engineers at MakerSquare Los Angeles. ]</h5>
        <div className="row row-spacer"></div>
        <div className="row">
        <div className="col-md-3">
        <h3 className="about-names">Chelsea Cheung</h3>
        <h6>Insert Bio Here</h6>
        </div>
        <div className="col-md-3">
        <h3 className="about-names">Marc Reicher</h3>
        <h6>Insert Bio Here</h6>
        </div>
        <div className="col-md-3">
        <h3 className="about-names">Nick Krein</h3>
        <h6>Insert Bio Here</h6>
        </div>
        <div className="col-md-3">
        <h3 className="about-names">Tim Lai</h3>
        <h6>Insert Bio Here</h6>
        </div>
        </div>
      </div>
    );
  }

}