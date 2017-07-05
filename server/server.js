import path from 'path';
import Express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router';
import render from './render';
import routes from 'routes';
import ErrorPage from 'components/ErrorPage';
import config from './config';
import configureStore from 'store';
import serveStatic from 'serve-static';
import compression from 'compression';
// import WebSocket from 'ws';
import http from 'http';
import App from 'containers/App';

const app = new Express();
const port = config.port;
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });
//
// // websocket setup
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//     ws.send(message);
//   });
// });

// gzip
app.use(compression());

// Use this middleware to serve up static files built into dist
app.use('/dist', serveStatic(path.join(__dirname, '../dist')));
app.use('/images', serveStatic(path.join(__dirname, '../common/images')));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // This can come from the server somewhere if you want to pre-populate the
  // app's initial state.
  const initialState = {};

  // Create a new Redux store instance
  const store = configureStore(initialState);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // See react-router's Server Rendering section:
  // https://reacttraining.com/react-router/web/guides/server-rendering
  const match = routes.reduce((acc, route) => {
    const { path, exact } = route;
    return matchPath(req.url, path, { exact }) || acc || null;
  });

  // No matched route, render a 404 page.
  if (!match) {
    res.status(404).send(render(<ErrorPage code={404} />, finalState));
    return;
  }

  // Otherwise, there is a match, so render the provider and router context
  const component = (
    <Provider store={store}>
      <StaticRouter context={{}} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.status(200).send(render(component, finalState));
}

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Application server mounted locally on port ${port}.`);
  }
});
