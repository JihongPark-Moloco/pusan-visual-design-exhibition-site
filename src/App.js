import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Graduate from './pages/Graduate'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/profile" render={(props) => <Graduate {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
