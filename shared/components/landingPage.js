import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTop25Times, updateTop25KeyStrokes } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';

export default class LandingPage extends Component {
  componentDidMount() {
    $('#navbar').addClass('hide-navbar');
  }

  render() {

    var githubButton = <a href="/auth/github"><span data-hover="Log in with Github" id="landing-button-text">Log in With Github</span></a>;

    return (
      <div className="container landing-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-4">
          <div className="text-center" id="landing-title"></div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
          <span><div className="landing-slogan">code with efficiency<span className="blinker">|</span></div></span>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-6 cl-effect-2 landing-buttons">  
            <span><a href="/challengelist"><span className="play-guest" data-hover='Play As Guest' id="landing-button-text">Play As Guest</span></a></span>
            <span>{githubButton}</span>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row row-spacer"></div>
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