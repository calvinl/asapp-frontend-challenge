import React, { Component } from 'react';
import qs from 'query-string';
import Chat from 'containers/Chat';
import css from './index.scss';
import mockUser from 'fixtures/mockUser';
import mockMessage from 'fixtures/mockMessage';

class ChannelContainer extends Component {

  user = mockUser('laura')

  getChannelProps = () => {
    const { location } = this.props;
    const { participants, name } = qs.parse(location.search);
    const channel = {};

    if (participants) {
      const handles = participants.split(',');
      channel.participants = handles.map(h => mockUser(h));
      channel.type = handles.length > 1 ? 'group' : 'private';

      if (channel.type === 'group') {
        channel.messages = require('../../fixtures/group').default.messages;
      } else {
        channel.messages = [
          mockMessage({
            ts: Date.now() - (60 * 1000 * 5),
            sender: this.user,
            body: 'Get to work!'
          }),
          mockMessage({
            ts: Date.now() - (60 * 1000 * 2),
            sender: channel.participants[0],
            body: `Ok ${this.user.handle}, I will...`
          })
        ];
      }
    }

    if (name) {
      channel.name = name;
      channel.type = 'channel';
      channel.messages = require('../../fixtures/channel').default.messages;
    }

    return channel;
  }

  render() {
    return (
      <div className={css.container}>
        <Chat user={this.user} channelProps={this.getChannelProps()} />
      </div>
    );
  }
}

export default ChannelContainer;
