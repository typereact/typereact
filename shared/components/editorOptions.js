import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateKeyMap } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';


class editorOptions extends Component {
  render() {
    return <div id='all-options'>
      <button className='sublime-option' style={{display: 'inline-block'}} onClick={this.props.selectKeyMap.bind(this,'sublime')}>Sublime</button>
      <button className='vim-option' style={{display: 'inline-block'}} onClick={this.props.selectKeyMap.bind(this,'vim')}>Vim</button>
      <button className='emacs-option' style={{display: 'inline-block'}} onClick={this.props.selectKeyMap.bind(this,'emacs')}>Emacs</button>
    </div>
  }

}

editorOptions.PropTypes = {
  selectKeyMap: PropTypes.func,
  keyMap: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    keyMap: state.editorState.keyMap,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    selectKeyMap: function(newKeyMap) {
      dispatch(updateKeyMap(newKeyMap))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(editorOptions);
