import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { storeResults } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.


class PostData extends Component {
//render button
//onclick, save desired props to a single results value
}

PostData.Proptypes = {

};

PostData.defaultProps = {

};

function mapStateToProps = (state) {
  return {

  }

}

function mapDispatchToProps = (dispatch, state) {
  return {
    postResult: function (results) {
      //grab all the props to package together to storage
      dispatch(storeResults(results));
      //expect a 'ready to post' = true prop
      //expect a 'post package' prop to be set (from null)
      //post request with packed storage data
      postRequest()
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostData);