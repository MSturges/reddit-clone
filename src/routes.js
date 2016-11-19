import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SubmitLink from './components/submit_link';


export default (
  <Route path="/" component={App}>
  <IndexRoute component={App} />
  <Route path="/submit" component={SubmitLink}/>
  </Route>
);
