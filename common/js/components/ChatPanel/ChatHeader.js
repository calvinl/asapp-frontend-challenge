import React from 'react';
import classnames from 'classnames/bind';
import css from './ChatHeader.scss';
import { humanString } from 'lib/channelHelper';

const cx = classnames.bind(css);

const ChatHeader = ({ user, channel, className }) => {
  const title = () => {
    switch (channel.type) {
      default:
      case 'private':
        return (
          <h2>Chatting with {humanString(channel.participants, user)}</h2>
        );
      case 'channel':
        return (
          <h2>#{channel.name}</h2>
        );
    }
  };

  return (
    <div className={cx('chatHeader', { [className]: !!className })}>{title()}</div>
  );
};

export default ChatHeader;
