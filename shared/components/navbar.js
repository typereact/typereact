import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/Navitem.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { checkUser, storeChallenges } from '../actions/actions.js';

class Navigation extends Component{
  componentDidMount() {
    $.get('/isLoggedIn', function(response) {
      // console.log('Login Status: ' + JSON.stringify(response, null, 2));
      var loggedIn = Boolean(response);
      var username = response.githubName ? response.githubName.split(' ')[0] : 'Guest';
      var pic = response.githubProfile || null;
      this.props.storeUser(loggedIn, username, pic);
    }.bind(this))

    if (this.props.challenges.length === 0) {
      $.get('/challenge/getAllChallenges', function(response) {
        // console.log('getting challenges: ' + JSON.stringify(response, null, 2));
        this.props.storeChallengeList(response);
      }.bind(this))
    }
  }

  render() {
    // console.log('Challenges saved to props: ' + JSON.stringify(this.props.challenges, null, 2));
    var githubButton;
    if(!this.props.isLoggedIn) {
      githubButton = <div style={{position: 'relative', display: 'inline-block', padding: '8px 0px'}}><a href="/auth/github" className='btn btn-block btn-social btn-github'><span className="fa fa-github"></span>Log in With Github</a></div>;
    } else {
      githubButton =
          <NavDropdown eventKey={3} title="My account" id="basic-nav-dropdown" style={{float: 'right'}}>
            <MenuItem eventKey={3.1} id='dropdown-link'>My Profile</MenuItem>
            <MenuItem eventKey={3.2} id='dropdown-link'>Stats</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} href="/auth/logout" id='dropdown-link'>Log out</MenuItem>
          </NavDropdown>
      // githubButton = <div style={{position: 'relative', display: 'inline-block', padding: '8px 0px', float: 'right'}}><a href="/auth/logout" className='btn btn-block btn-social btn-github'><span className="fa fa-github"></span>Logout</a></div>;
    }
    var userDisplay;
    if(!this.props.profilePic) {
      userDisplay = <NavItem id='user-display-name'>Welcome, {this.props.user}</NavItem>;
    } else {
      userDisplay = <div style={{display: 'inline-block'}}><img src={this.props.profilePic} style={{height: '50px', display: 'inline-block'}} /><div style={{display: 'inline-block', color:'#a9b7c0', padding: '0px 10px'}}>Welcome, {this.props.user}</div></div>
    }
    // console.log('navbar props: ' + JSON.stringify(this.props));
    return (
    <div>
      <Navbar id='navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" id='navbar-links'>TypeReact</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/challengeList">Challenges</NavItem>
          <NavItem eventKey={2} href="#">Users</NavItem>
        </Nav>
        <Nav pullRight>
          {userDisplay}
          {githubButton}
        </Nav>
      </Navbar>
      <div>{this.props.children}</div>
    </div>
    )
  }
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.string,
  profilePic: PropTypes.string,
  challenges: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedInState.loggedIn,
    user: state.loggedInState.user,
    profilePic: state.loggedInState.profilePic,
    challenges: state.challengeState.challenges,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    storeUser: function(loggedIn, username, picture) {
      dispatch(checkUser(loggedIn, username, picture));
    },
    storeChallengeList: function(challengeList) {
      dispatch(storeChallenges(challengeList))
    }
  }
}
//add dispatch if creating new actions
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


