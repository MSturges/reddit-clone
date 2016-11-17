import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

export default (
  <Route path="/" component={App}>
  </Route>
);

// <IndexRoute component={JokesIndex} />
// <Route path="joke/new" component={JokeNew} />
// <Route path="joke/:id" component={JokeShow} />
// <Route path="joke/edit/:id" component={JokeEdit} />
