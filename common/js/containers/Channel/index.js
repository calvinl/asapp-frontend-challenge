import React, { Component } from 'react';
import qs from 'query-string';
import Chat from 'containers/Chat';
import css from './index.scss';
import mockUser from 'fixtures/mockUser';

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
    }

    if (name) {
      channel.name = name;
      channel.type = 'channel';
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
