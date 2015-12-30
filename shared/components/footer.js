import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar.js';

export default class Footer extends Component {
  
  render() {
    return (
    <div className='row'>
    <div className='col-md-12'>
      <Navbar id="footer">
        <div className="footer-container">
        <span className="footer-elements">TypeReact <a href="https://github.com/typereact/typereact" target="_blank"><i className="fa fa-github"></i></a></span>
        <span className="footer-elements">Chelsea Cheung <a href="https://github.com/chelseatcheung" target="_blank"><i className="fa fa-github"></i></a> <a href="https://www.linkedin.com/in/chelsea-cheung-6442399a
    " target="_blank"><i className="fa fa-linkedin"></i></a></span>
        <span className="footer-elements">Nick Krein <a href="https://github.com/nkreinmusic" target="_blank"><i className="fa fa-github"></i></a> <a href="  
    https://www.linkedin.com/in/nickkrein" target="_blank"><i className="fa fa-linkedin"></i></a></span>
        <span className="footer-elements">Tim Lai <a href="https://github.com/tim-lai" target="_blank"><i className="fa fa-github"></i></a> <a href="https://www.linkedin.com/in/thetimlai" target="_blank"><i className="fa fa-linkedin"></i></a></span>
        <span className="footer-elements">Marc Reicher <a href="https://github.com/marcreicher" target="_blank"><i className="fa fa-github"></i></a> <a href="https://www.linkedin.com/in/marcreicher" target="_blank"><i className="fa fa-linkedin"></i></a></span>
        </div>
        </Navbar>
    </div>
    </div>
    );
  }
}