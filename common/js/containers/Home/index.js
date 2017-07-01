import React, { Component } from 'react';
import Chat from 'containers/Chat';
import css from './index.scss';
import mockUser from 'fixtures/mockUser';

const participants = [ mockUser('laura'), mockUser('rob') ];
const [ laura, rob ] = participants;

export default class HomeContainer extends Component {
  render() {
    return (
      <div className={css.homeContainer}>
        <div className={css.left}>
          <Chat user={laura} channelProps={{ participants }} />
        </div>
        <div className={css.right}>
          <Chat user={rob} channelProps={{ participants }} />
        </div>
      </div>
    );
  }
}
