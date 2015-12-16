
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from '../server/App'
import editorApp from './reducers/reducers.js'
import { connect } from 'react-redux'
import thunk from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(
  thunk
  )(createStore)

let store = createStoreWithMiddleware(editorApp)
// let store = createStore(editorApp);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
