import React from 'react';
import logo from './logo.svg';
import './App.css';
import product_list from './product-list';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
       <Router>
          <Route path='/' exact component={product_list} />
        </Router>
    </Provider>
  );
}

export default App;
