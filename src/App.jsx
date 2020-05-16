import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/UserDashBoard';

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/" />
      </Switch>
    </>
  );
}

export default App;
