
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from '../server/app';
import editorApp from './reducers/reducers.js';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import Navbar from './components/navbar.js';
import Router from "react-router";  
import { DefaultRoute, Link, Route, RouteHandler } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ChallengeList from './components/challengeList.js'

const history = createBrowserHistory();




let createStoreWithMiddleware = applyMiddleware(
  thunk
  )(createStore)

let store = createStoreWithMiddleware(editorApp)
// let store = createStore(editorApp);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Navbar}>
        <Route path='playchallenge' component={App}/>
        <Route path='challengeList' component={ChallengeList}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
)
