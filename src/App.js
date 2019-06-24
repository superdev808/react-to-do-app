import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="app" >
            <h2> React Todo App </h2>
            <Route path="/" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;