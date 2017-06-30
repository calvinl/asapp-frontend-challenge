import React from 'react';
import { Input } from 'semantic-ui-react';
import css from './MessageForm.scss';

const getPlaceholder = (channel, participants) => {
  switch (channel.type) {
    default:
    case 'private':
      return `Message ${participants.map(p => `@${p.handle}`).join(', ')}`;
    case 'channel':
      return `Message #${channel.name}`;
  }
};

const MessageForm = ({ channel, participants }) => {
  return (
    <div className={css.messageForm}>
      <Input
        className={css.messageInput}
        placeholder={getPlaceholder(channel, participants)}
        action={{ color: 'teal', icon: 'send' }}
      />
    </div>
  );
};

export default MessageForm;
