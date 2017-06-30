import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import Message from './Message';
import classnames from 'classnames/bind';
import css from './MessageList.scss';

const cx = classnames.bind(css);

class MessageList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    className: PropTypes.string,
    messages: PropTypes.array
  }

  static defaultProps = {
    messages: []
  }

  componentDidUpdate() {
    // scroll to bottom
    // TODO: Probably needs a check to ensure it's a new message, or messages
    // just loaded.
    setTimeout(() => {
      const { scrollable } = this.refs;
      scrollable.scrollTop = scrollable.scrollHeight - scrollable.clientHeight;
    }, 0);
  }

  render() {
    const { user, messages, className } = this.props;
    return (
      <Comment.Group className={cx('messageList', { [className]: !!className })}>
        <div ref="scrollable" className={css.scrollable}>
          <div className={css.innerFlex}>
            {messages.map(message => (
              <Message key={message.id} user={user} message={message} />
            ))}
          </div>
        </div>
      </Comment.Group>
    );
  }
}

export default MessageList;
