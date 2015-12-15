import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/Navitem.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
// import Tabs from 'react-bootstrap/lib/Tabs.js';
// import Tab from 'react-bootstrap/lib/Tab.js';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';

class Navigation extends Component{
  render() {
    var githubButton;
    if(!this.props.isLoggedIn) {
      githubButton = <a href="/auth/github" className='btn btn-block btn-social btn-github'><span className="fa fa-github"></span>Log in With Github</a>;
    } else {
      githubButton = <a href="/auth/logout" className='btn btn-block btn-social btn-github'><span className="fa fa-github"></span>Logout</a>;
    }
    console.log('navbar props: ' + JSON.stringify(this.props));
    return (
      // <Tabs defaultActiveKey={2}>
      //   <Tab eventKey={1} title="Home">Tab 1 content</Tab>
      //   <Tab eventKey={2} title="Rankings">Tab 2 content</Tab>
      //   <Tab eventKey={3} title="Users">Tab 3 content</Tab>
      //   <Nav>
      //   <NavDropdown eventKey={3} title="My account" id="basic-nav-dropdown">
      //   <MenuItem eventKey={3.1}>Profile</MenuItem>
      //   <MenuItem eventKey={3.2}>Stats</MenuItem>
      //   <MenuItem eventKey={3.3}>Friends</MenuItem>
      //   <MenuItem divider />
      //   <MenuItem eventKey={3.3}>Separated link</MenuItem>
      //   </NavDropdown>
      //   </Nav>
      // </Tabs>

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">TypeReact</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Challenges</NavItem>
          <NavItem eventKey={2} href="#">Users</NavItem>
          <NavDropdown eventKey={3} title="My account" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>{this.props.user}</MenuItem>
            <MenuItem eventKey={3.2}>Stats</MenuItem>
            <MenuItem eventKey={3.3}>History</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          {githubButton}
        </Nav>
      </Navbar>
    )
  }
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.string,
  profilePic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedInState.loggedIn,
    user: state.loggedInState.user,
    profilePic: state.loggedInState.profilePic,
  }
}


// function mapDispatchToProps(dispatch) {
//   return {
//     storeUser: function(loggedIn, username, picture) {
//       dispatch(checkUser(loggedIn, username, picture));
//     }
//   }
// }
//add dispatch if creating new actions
export default connect(mapStateToProps)(Navigation);