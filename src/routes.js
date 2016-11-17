import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signup from './components/auth/signup';

export default (
  <Route path="/" component={App}>
    <Route path="/signup" component={Signup}/>
  </Route>
);

// <IndexRoute component={JokesIndex} />
