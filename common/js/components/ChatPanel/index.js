import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import css from './index.scss';

const getParticipants = (user, participants) => {
  return participants.filter(p => p.handle !== user.handle);
};

const ChatPanel = (props) => {
  const { user, channel } = props;
  const participants = getParticipants(user, channel.participants);

  return (
    <div className={css.chatPanel}>
      <Dimmer inverted active={channel.isLoading}>
        <Loader>Loading</Loader>
      </Dimmer>
      <ChatHeader
        {...props}
        className={css.chatHeader}
        participants={participants}
      />
      <MessageList
        {...props}
        className={css.messageList}
        messages={channel.messages}
      />
      <MessageForm
        {...props}
        className={css.messageForm}
        participants={participants}
      />
    </div>
  );
};

export default ChatPanel;
