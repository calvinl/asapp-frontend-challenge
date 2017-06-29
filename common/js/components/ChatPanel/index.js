import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const getParticipants = (user, participants) => {
  return participants.filter(p => p.handle !== user.handle);
};

const ChatPanel = ({ user, channel }) => {
  const participants = getParticipants(user, channel.participants);

  return (
    <div>
      <h2>Chatting with {participants.map(p => p.handle).join(', ')}.</h2>
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default ChatPanel;
