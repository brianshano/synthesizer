import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.js';
import createStore from './redux/Create';

const store = createStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
