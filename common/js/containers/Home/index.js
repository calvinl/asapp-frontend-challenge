import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Chat from 'containers/Chat';

export default class HomeContainer extends Component {
  render() {

    const laura = { handle: 'laura' };
    const rob = { handle: 'rob' };
    const channel = {
      id: 1,
      participants: [laura, rob]
    };

    return (
      <Container>
        <Grid divided columns={2}>
          <Grid.Column>
            <Chat user={laura} channel={channel} />
          </Grid.Column>
          <Grid.Column>
            <Chat user={rob} channel={channel} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
