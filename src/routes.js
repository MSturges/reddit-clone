import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsContent from './components/front_page';
import SubmitLink from './components/submit_video';
import RequireAuth from './components/auth/require_auth';
import Comment from './components/single_video';


export default (
  <Route path="/" component={App}>
  <IndexRoute component={PostsContent} />
  <Route path="/submit" component={RequireAuth(SubmitLink)}/>

  <Route  path="/video/:Id" component={Comment} />
  </Route>
);
