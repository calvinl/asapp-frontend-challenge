import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import classnames from 'classnames/bind';
import css from './MessageForm.scss';

const cx = classnames.bind(css);

const getPlaceholder = (channel, participants) => {
  switch (channel.type) {
    default:
    case 'private':
      return `Message ${participants.map(p => `@${p.handle}`).join(', ')}`;
    case 'channel':
      return `Message #${channel.name}`;
  }
};

const MessageForm = ({ channel, participants, className }) => {
  return (
    <div className={cx('messageForm', { [className]: !!className })}>
      <Input
        className={css.messageInput}
        placeholder={getPlaceholder(channel, participants)}
        action={{ color: 'teal', icon: 'send' }}
      />
    </div>
  );
};

MessageForm.propTypes = {
  channel: PropTypes.object.isRequired,
  participants: PropTypes.array,
  className: PropTypes.string
};

export default MessageForm;
