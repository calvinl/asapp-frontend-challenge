import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from 'routes';
import css from './index.scss';

const App = () => (
  <Container className={css.container} fluid={true}>
    <Header />
    <div className={css.innerContainer}>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </div>
    <Footer />
  </Container>
);

export default App;
