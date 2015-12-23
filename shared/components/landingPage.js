import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTop25Times, updateTop25KeyStrokes } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import $ from 'jquery';

export default class LandingPage extends Component {

  render() {
    return <div className="container landing-page">
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className='row'>
        <h1 className='text-center' id='landing-title'>TypeReact</h1>
        <h3 className='text-center' id='landing-slogan'>code with efficiency</h3>
      </div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row col-md-offset-3">  
        <button className="btn btn-default btn-lg col-md-3 matrix">Play As Guest</button>
        <span className='col-md-1'></span>
        <button className="btn btn-default btn-lg col-md-3 matrix">Login with Github</button>
      </div>
      <div className="row row-spacer"></div>
      <div className="row col-md-offset-3">  
        <button className="btn btn-default btn-lg col-md-3 matrix">FAQs</button>
        <span className='col-md-1'></span>
        <button className="btn btn-default btn-lg col-md-3 matrix">Fourth Option</button>
      </div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
      <div className="row row-spacer"></div>
    </div>
  }

}