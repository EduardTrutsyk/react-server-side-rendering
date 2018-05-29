import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';

const root = (
  <Root
    Router={BrowserRouter}
  />
);

hydrate(root, document.getElementById('root'));
