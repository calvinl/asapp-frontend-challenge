import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import css from './index.scss';

const ChatPanel = (props) => {
  const { channel, onIncomingMessage, onOutgoingMessage } = props;

  return (
    <div className={css.chatPanel}>
      <Dimmer inverted active={channel.isLoading}>
        <Loader>Loading</Loader>
      </Dimmer>
      <ChatHeader
        {...props}
        className={css.chatHeader}
      />
      <MessageList
        {...props}
        className={css.messageList}
        messages={channel.messages}
      />
      <MessageForm
        {...props}
        className={css.messageForm}
        onIncomingMessage={onIncomingMessage}
        onOutgoingMessage={onOutgoingMessage}
      />
    </div>
  );
};

ChatPanel.propTypes = {
  onIncomingMessage: PropTypes.func,
  onOutgoingMessage: PropTypes.func
};

export default ChatPanel;
