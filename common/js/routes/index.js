'use strict';

import Home from 'containers/Home';
import Channel from 'containers/Channel';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/channel',
    component: Channel
  }
];
