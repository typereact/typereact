
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../server/App'
import editorApp from './reducers/reducers.js'
import { connect } from 'react-redux'


let store = createStore(editorApp);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
