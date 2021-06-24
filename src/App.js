import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import Message from './pages/Message';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import MyPosts from './pages/MyPosts';
import MessageDetails from './pages/MessageDetails';

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/posts" component={Posts} />      
      <Route exact path="/messages" component={Message} />
      <Route exact path="/messages/:id" component={MessageDetails} />
      <Route exact path="/new-post" component={NewPost} />
      <Route exact path="/my-posts" component={MyPosts} />       
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
}

export default App;
