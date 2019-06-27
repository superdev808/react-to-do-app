import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import CreateTodo from './Components/Todos/CreateTodo'
import { createBrowserHistory } from 'history';
import PostDetails from './Components/Todos/TodoDetails';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className='app' >
            <h2> React Todo App </h2>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/new' component={CreateTodo} />
              <Route path='/update/:id' component={PostDetails} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;