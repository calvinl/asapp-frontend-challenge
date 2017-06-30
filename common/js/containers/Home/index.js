import React, { Component } from 'react';
import Chat from 'containers/Chat';
import css from './index.scss';
import privateChannel from 'fixtures/private';

const [rob, laura] = privateChannel.participants;

export default class HomeContainer extends Component {
  render() {
    return (
      <div className={css.homeContainer}>
        <div className={css.left}>
          <Chat user={laura} channel={privateChannel} />
        </div>
        <div className={css.right}>
          <Chat user={rob} channel={privateChannel} />
        </div>
      </div>
    );
  }
}
