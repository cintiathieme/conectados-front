import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Message from './pages/Message';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/message" component={Message} />
      <Route exact path="/:id" component={PostDetails} />
    </Switch>
  );
}

export default App;
