import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import Message from './Message';
import css from './MessageList.scss';

const MessageList = ({ messages }) => {
  return (
    <Comment.Group className={css.messageList}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </Comment.Group>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array
};

MessageList.defaultProps = {
  messages: []
};

export default MessageList;
