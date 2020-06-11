import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { First, Second } from 'pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={First} />
      <Route path="/second" component={Second} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
