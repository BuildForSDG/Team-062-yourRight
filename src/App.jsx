import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Signin';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/Signin' exact component={Signin} />
        <Route path='/Signup' exact component={Signup} />
        <Route path='/Forgot-Password' component={ForgotPassword} />
      </Switch>
    </Router>
  )
};

export default App;
