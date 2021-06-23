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
  // const [role, setRole] = React.useState(localStorage.getItem('role'));
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      {/* render={(props) => <Signin {...props} updateRole={setRole}/>}/>      */}
      <Route exact path="/messages" component={Message} />
      <Route exact path="/messages/:id" component={MessageDetails} />
      <Route exact path="/new-post" component={NewPost} />
      <Route exact path="/my-posts" component={MyPosts} />
       {/* render={(props) => <MyPosts {...props} role={role}/>} /> */}
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
}

export default App;
