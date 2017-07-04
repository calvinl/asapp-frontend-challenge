import React, { Component } from 'react';
import Chat from 'containers/Chat';
import css from './index.scss';
import mockUser from 'fixtures/mockUser';

export default class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.participants = [ mockUser('laura'), mockUser('rob') ];
  }

  render() {
    const [ laura, rob ] = this.participants;
    const messages = require('../../fixtures/private').default.messages;

    return (
      <div className={css.homeContainer}>
        <div className={css.left}>
          <Chat user={laura} channelProps={{ participants: this.participants, messages }} />
        </div>
        <div className={css.right}>
          <Chat user={rob} channelProps={{ participants: this.participants, messages }} />
        </div>
      </div>
    );
  }
}
