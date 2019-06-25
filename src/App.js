import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import CreatePost from './Components/Post/CreatePost'
import { createBrowserHistory } from 'history';
import PostDetails from './Components/Post/PostDetails';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="app" >
            <h2> React Todo App </h2>
            <Route path='/' exact component={Dashboard} />
            <Route path="/new" component={CreatePost} />
            <Route path="/edit/:id" component={PostDetails} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;