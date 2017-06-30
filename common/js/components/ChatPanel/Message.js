import React from 'react';
import { Comment } from 'semantic-ui-react';
import classnames from 'classnames/bind';
import moment from 'moment';
import css from './Message.scss';

const cx = classnames.bind(css);

const Message = ({ user, message }) => {
  const { sender } = message;

  return (
    <Comment className={cx({ currentUser: sender.handle === user.handle })}>
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
