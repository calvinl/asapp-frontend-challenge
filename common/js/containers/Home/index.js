import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Chat from 'containers/Chat';
import privateChannel from 'fixtures/private';

const [rob, laura] = privateChannel.participants;

export default class HomeContainer extends Component {
  render() {
    return (
      <Container fluid>
        <Grid divided columns={2}>
          <Grid.Column>
            <Chat user={laura} channel={privateChannel} />
          </Grid.Column>
          <Grid.Column>
            <Chat user={rob} channel={privateChannel} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
