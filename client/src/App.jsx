import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/Dashboard'
import './App.css';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path='/dashboard' >
          <Dashboard />
        </Route>
        <Route path='/' ></Route>
      </Switch>
    </div>
  );
}

export default App;
