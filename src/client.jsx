import React from 'react';
import { hydrate } from 'react-dom';

import Root from './Root';

const root = (
  <Root />
);

hydrate(root, document.getElementById('root'));
