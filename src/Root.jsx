import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';

import Hello from './components/Hello';
import HomePage from './pages/HomePage';

const Root = () => (
  <div>
    <h1>Server Side Renderig</h1>
    <Hello name="World" />
    <HomePage />
  </div>
);

export default hot(module)(Root);

