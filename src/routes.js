import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsContent from './components/posts_content';
import SubmitLink from './components/submit_link';
import RequireAuth from './components/auth/require_auth';
import Comment from './components/video_comment';


export default (
  <Route path="/" component={App}>
  <IndexRoute component={PostsContent} />
  <Route path="/submit" component={RequireAuth(SubmitLink)}/>

  <Route  path="/video/:Id" component={Comment} />
  </Route>
);
