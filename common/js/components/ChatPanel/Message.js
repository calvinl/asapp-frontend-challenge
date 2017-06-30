import React from 'react';
import { Comment } from 'semantic-ui-react';
import moment from 'moment';

const Message = ({ message }) => {
  const { sender } = message;

  return (
    <Comment>
      <Comment.Avatar src={sender.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{sender.handle}</Comment.Author>
        <Comment.Metadata>
          <div>{moment(message.timestamp).fromNow()}</div>
        </Comment.Metadata>
        <Comment.Text>{message.body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
