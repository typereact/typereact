import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTop25Times, updateTop25KeyStrokes } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';

export default class LandingPage extends Component {

  render() {

    var githubButton = <a href="/auth/github" className="btn btn-lg col-md-3 btn-social btn-github" id="landing-button-text"><span className="fa fa-github"></span>Log in With Github</a>;

    return (
      <div className="container landing-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <h1 className="text-center" id="landing-title">TypeReact</h1>
          <h3 className="text-center" id="landing-slogan">code with efficiency</h3>
        </div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row col-md-offset-3">  
          <a href="/playchallenge/1" className="btn btn-default btn-lg col-md-3" id="landing-button-text">Play As Guest</a>
          <span className="col-md-1"></span>
          {githubButton}
        </div>
        <div className="row row-spacer"></div>
        <div className="row col-md-offset-3">  
          <a href="/faqs"className="btn btn-default btn-lg col-md-3" id="landing-button-text">FAQs</a>
          <span className="col-md-1"></span>
          <a href="/challengelist" className="btn btn-default btn-lg col-md-3" id="landing-button-text">View All Challenges</a>
        </div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
      </div>
    );
  }

}