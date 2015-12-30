import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/Navitem.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import Modal from 'react-bootstrap/lib/Modal.js';
import Button from 'react-bootstrap/lib/Button.js';
import Footer from './footer.js';
// import Modal.Body from 'react-bootstrap/lib/ModalBody.js';
// import Modal.Header from 'react-bootstrap/lib/ModalHeader.js';
// import Modal.Footer from 'react-bootstrap/lib/ModalFooter.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { checkUser, storeChallenges, hideModal, showModal } from '../actions/actions.js';

var sublimeKeys = 
  <div>
    <p>⌘ + X: Cut line</p>
    <p>⌘ + ↩: Insert line after</p>
    <p>⌘ + ⇧ + ↩: Insert line before</p>
    <p>⌘ + ⌃ + ↑: Move line/selection up</p>
    <p>⌘ + ⌃ + ↓: Move line/selection down</p>
    <p>⌘ + L: Select line - Repeat to select next lines</p>
    <p>⌘ + D: Select word - Repeat to select next occurrence</p>
    <p>⌃ + ⌘ + G: Select all occurrences of current selection</p>
    <p>⌃ + ⇧ + ↑: Extra cursor on the line above</p>
    <p>⌃ + ⇧ + ↓: Extra cursor on the line below</p>
    <p>⌃ + M: Jump to closing parentheses Repeat to jump to opening parentheses</p>
    <p>⌃ + ⇧ + M: Select all contents of the current parentheses</p>
    <p>⌃ + A, ⌘ + Left: Move to beginning of line</p>
    <p>⌃ + E, ⌘ + Right: Move to end of line</p>
    <p>⌘ + K, ⌘ + K: Delete from cursor to end of line</p>
    <p>⌘ + K + ⌫: Delete from cursor to start of line</p>
    <p>⌘ + ]: Indent current line(s)</p>
    <p>⌘ + [: Un-indent current line(s)</p>
    <p>⌘ + ⇧ + D: Duplicate line(s)</p>
    <p>⌘ + J: Join line below to the end of the current line</p>
    <p>⌘ + /: Comment/un-comment current line</p>
    <p>⌘ + ⌥ + /: Block comment current selection</p>
    <p>⌘ + Y: Redo, or repeat last keyboard shortcut command</p>
    <p>⌘ + ⇧ + V: Paste and indent correctly</p>
    <p>⌃ + Space: Select next auto-complete suggestion</p>
    <p>⌃ + U: Soft undo; jumps to your last change before undoing change when repeated</p>
    <p>⌃ + ⇧ + Up: Column selection up</p>
    <p>⌃ + ⇧ + Down: Column selection down</p>
    <p>⌃ + ⇧ + W: Wrap Selection in html tag</p>
    <p>⌃ + ⇧ + K: Delete current line of cursor</p>
    <p>⌘ + Down  Scroll to end of file</p>
    <p>⌘ + Up  Scroll to start of file</p>
    <p>⌘ + K, ⌘ + U  Transform to Uppercase</p>
    <p>⌘ + K, ⌘ + L  Transform to Lowercase</p>
  </div>;

var vimKeys = 
  <div>
    <h5>Cursor Movement</h5>
    <hr></hr>
    <p>h: Move left</p>
    <p>j: move down</p>
    <p>k: move up</p>
    <p>l: move right</p>
    <p>w: jump by start of words (punctuation considered words)</p>
    <p>W: jump by words (spaces separate words)</p>
    <p>e: jump to end of words (punctuation considered words)</p>
    <p>E: jump to end of words (no punctuation)</p>
    <p>b: jump backward by words (punctuation considered words)</p>
    <p>B: jump backward by words (no punctuation)</p>
    <p>0: (zero) start of line</p>
    <p>^: first non-blank character of line</p>
    <p>$: end of line</p>
    <p>G: Go To command (prefix with number</p>
    <p>Note: Prefix a cursor movement command with a number to execute that command multiple times. For example, 4j moves down 4 lines.</p>
    <hr></hr>
    <h5>Insert Mode Inserting/Appending text</h5>
    <hr></hr>
    <p>i: start insert mode at cursor</p>
    <p>I: insert at the beginning of the line</p>
    <p>a: append after the cursor</p>
    <p>A: append at the end of the line</p>
    <p>o: open (append) blank line below current line (no need to press return)</p>
    <p>O: open blank line above current line</p>
    <p>ea:  append at end of word</p>
    <p>Esc: exit insert mode</p>
    <hr></hr>
    <h5>Editing</h5>
    <hr></hr>
    <p>r: replace a single character (does not use insert mode)</p>
    <p>J: join line below to the current one</p>
    <p>cc:  change (replace) an entire line</p>
    <p>cw:  change (replace) to the end of word</p>
    <p>c$:  change (replace) to the end of line</p>
    <p>s: delete character at cursor and subsitute text</p>
    <p>S: delete line at cursor and substitute text (same as cc)</p>
    <p>xp:  transpose two letters (delete and paste, technically)</p>
    <p>u: undo</p>
    <p>.: repeat last command</p>
    <hr></hr>
    <h5>Marking text (visual mode)</h5>
    <hr></hr>
    <p>v: start visual mode, mark lines, then do command (such as y-yank)</p>
    <p>V: start Linewise visual mode</p>
    <p>o: move to other end of marked area</p>
    <p>Ctrl+v:  start visual block mode</p>
    <p>O: move to Other corner of block</p>
    <p>aw:  mark a word</p>
    <p>ab:  a () block (with braces)</p>
    <p>aB:  a {} block (with brackets)</p>
    <p>ib:  inner () block</p>
    <p>iB:  inner {} block</p>
    <p>Esc: exit visual mode</p>
    <hr></hr>
    <h5>Visual commands</h5>
    <hr></hr>
    <p>Right: shift right</p>
    <p>Left: shift left</p>
    <p>y: yank (copy) marked text</p>
    <p>d: delete marked text</p>
    <p>~: switch case</p>
    <hr></hr>
    <h5>Cut and Paste</h5>
    <hr></hr>
    <p>yy:  yank (copy) a line</p>
    <p>2yy: yank 2 lines</p>
    <p>yw: yank word</p>
    <p>y$: yank to end of line</p>
    <p>p: put (paste) the clipboard after cursor</p>
    <p>P: put (paste) before cursor</p>
    <p>dd: delete (cut) a line</p>
    <p>dw: delete (cut) the current word</p>
    <p>x: delete (cut) current character</p>
  </div>;

var emacsKeys =
  <div>
    <p>Emacs keys</p>
  </div>;

var test = <p>Please try again.</p>;

class Navigation extends Component{
  
  componentDidMount() {
    // console.log(this.props.challenges);
    $.get('/isLoggedIn', function(response) {
      // console.log('Login Status: ' + JSON.stringify(response, null, 2));
      console.log('response is ', response);
      var loggedIn = Boolean(response);
      var username = response.githubName ? response.githubName.split(' ')[0].toLowerCase() : 'guest';
      var pic = response.githubProfile || null;
      var currentUserId = response.id || 1;
      this.props.storeUser(loggedIn, username, pic, currentUserId);
    }.bind(this));
  }

  render() {
    var hotkeys;
    switch (this.props.cheatSheet) {
    case 'Sublime Text':
      hotkeys = sublimeKeys;
      break;
    case 'Vim':
      hotkeys = vimKeys;
      break;
    case 'Emacs':
      hotkeys = emacsKeys;
      break;
    default:
      hotkeys = <p>Something happened! Please try again.</p>;
    }
    // console.log('Challenges saved to props: ' + JSON.stringify(this.props.challenges, null, 2));
    var githubButton;
    if(!this.props.isLoggedIn) {
      githubButton = <div className="user-display" style={{display: 'inline-block', padding: '8px 0px'}}><a href="/auth/github" id="github-button" className="btn btn-block btn-social btn-github"><span className="fa fa-github"></span>Log in With Github</a></div>;
    } else {
      githubButton =
          <NavDropdown eventKey={3} title="my account" id="basic-nav-dropdown" style={{float: 'right'}}>
            <MenuItem eventKey={3.1} id='dropdown-link' href='/profile'>my profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2} href="/auth/logout" id="dropdown-link">log out</MenuItem>
          </NavDropdown>;
      // githubButton = <div style={{position: "relative", display: "inline-block", padding: "8px 0px", float: "right"}}><a href="/auth/logout" className="btn btn-block btn-social btn-github"><span className="fa fa-github"></span>Logout</a></div>;
    }
    var userDisplay;
    if(!this.props.profilePic) {
      userDisplay = <NavItem id="user-display-name">welcome, <font color="#fc5848">{this.props.user}</font></NavItem>;
    } else {
      userDisplay = <div className="user-display" style={{display: 'inline-block'}}><img src={this.props.profilePic} style={{height: '50px', display: 'inline-block'}} /><div className="user-display" style={{display: 'inline-block', color:'#575858', padding: '0px 10px'}}><b>welcome, <font color="#fc5848">{this.props.user}</font></b></div></div>;
    }
    // console.log("navbar props: " + JSON.stringify(this.props));
    var cheatSheet = <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.lgShow} onHide={this.props.hideCheatSheet}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg"><strong>{this.props.cheatSheet}</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hotkeys}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideCheatSheet}>Close</Button>
        </Modal.Footer>
      </Modal>;
    // console.log(this.props.user, this.props.currentUserId);

    return (
    <div>
      <Navbar fluid id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><div className="logo"></div></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="navbar-challenges">
          <NavItem eventKey={1} href="/challengeList" data-hover="challenges">challenges</NavItem>
          <NavDropdown eventKey={4}  data-hover="cheatsheets" title="cheatsheets" id="basic-nav-dropdown" style={{float: 'right'}}>
            <MenuItem eventKey={4.1} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Sublime Text')}>sublime</MenuItem>
            <MenuItem eventKey={4.2} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Vim')}>vim</MenuItem>
            <MenuItem eventKey={4.3} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Emacs')}>emacs</MenuItem>
          </NavDropdown>
          <NavItem eventKey={5} href='/faqs'>faqs</NavItem>
          <NavItem eventKey={6} href='/about'>about</NavItem>
        </Nav>
        <Nav className="user-right" pullRight>
          {userDisplay}
          {githubButton}
          {cheatSheet}
        </Nav>
      </Navbar>
      <div>{this.props.children}</div>
      <Footer />
    </div>
    );
  }
}
            // <div className='logo'></div>
            // <a href="/" id='navbar-links'>TypeReact</a>

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.string,
  profilePic: PropTypes.string,
  lgShow: PropTypes.bool,
  cheatSheet: PropTypes.string,
  currentUserId: PropTypes.number,
  hideCheatSheet: PropTypes.func,
  showCheatSheet: PropTypes.func,
  storeUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedInState.loggedIn,
    user: state.loggedInState.user,
    profilePic: state.loggedInState.profilePic,
    lgShow: state.loggedInState.lgShow,
    cheatSheet: state.loggedInState.cheatSheet,
    currentUserId: state.loggedInState.currentUserId
  };
}


function mapDispatchToProps(dispatch) {
  return {
    storeUser: function(loggedIn, username, picture, currentUserId) {
      dispatch(checkUser(loggedIn, username, picture, currentUserId));
    },
    hideCheatSheet: function() {
      dispatch(hideModal());
    },
    showCheatSheet: function(cheatSheet) {
      dispatch(showModal(cheatSheet));
    }
  };
}
//add dispatch if creating new actions
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


