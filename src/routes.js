import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsContent from './components/posts_content';
import SubmitLink from './components/submit_link';


export default (
  <Route path="/" component={App}>
  <IndexRoute component={PostsContent} />
  <Route path="/submit" component={SubmitLink}/>
  </Route>
);
