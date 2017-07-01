import React, { Component } from 'react';
import Chat from 'containers/Chat';
import css from './index.scss';
import mockUser from 'fixtures/mockUser';

const participants = [ mockUser('laura'), mockUser('rob') ];
const [ laura, rob ] = participants;
const messages = [
  {
    id: 1,
    sender: rob,
    recipient: laura,
    body: 'hey laura, do you have a sec?',
    timestamp: Date.now() - (60 * 1000 * 5)
  },
  {
    id: 2,
    sender: rob,
    recipient: laura,
    body: 'i wanted to ask you about the new designs',
    timestamp: Date.now() - (60 * 1000 * 5)
  },
  {
    id: 3,
    sender: laura,
    recipient: rob,
    body: 'sure, what\'s up?',
    timestamp: Date.now()
  }
];

export default class HomeContainer extends Component {
  render() {
    return (
      <div className={css.homeContainer}>
        <div className={css.left}>
          <Chat user={laura} channelProps={{ participants, messages }} />
        </div>
        <div className={css.right}>
          <Chat user={rob} channelProps={{ participants, messages }} />
        </div>
      </div>
    );
  }
}
