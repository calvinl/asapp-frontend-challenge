import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import css from './index.scss';

const getParticipants = (user, participants) => {
  return participants.filter(p => p.handle !== user.handle);
};

const ChatTitle = ({ channel, participants }) => {
  switch (channel.type) {
    default:
    case 'private':
      return (
        <h2>Chatting with {participants.map(p => p.handle).join(', ')}.</h2>
      );
    case 'channel':
      return (
        <h2>#{channel.name}</h2>
      );
  }
};

const ChatPanel = (props) => {
  const { user, channel } = props;
  const participants = getParticipants(user, channel.participants);

  return (
    <div className={css.chatPanel}>
      <ChatTitle {...props} participants={participants} />
      <MessageList messages={channel.messages} />
      <MessageForm {...props} participants={participants} />
    </div>
  );
};

export default ChatPanel;
