import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/category" component={RegisterCategory} />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/" component={Home} exact />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);