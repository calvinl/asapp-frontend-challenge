import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import classnames from 'classnames/bind';
import css from './MessageForm.scss';
import { sendMessage } from 'actions/channel';

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

class MessageForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired,
    participants: PropTypes.array,
    className: PropTypes.string
  }

  sendMessage = () => {
    const { onOutgoingMessage, user, channel, dispatch } = this.props;
    const { messageInput } = this.refs;
    const body = messageInput.inputRef.value;

    if (body && body !== '') {
      const message = { sender: user, channelId: channel.id, body };

      dispatch(sendMessage(message));
      onOutgoingMessage(messageInput.inputRef.value);

      messageInput.inputRef.value = '';
    }
  }

  handleKeyDown = (ev) => {
    const { keyCode } = ev;

    if (keyCode === 13) {
      this.sendMessage();
    }
  }

  render() {
    const { channel, participants, className } = this.props;

    return (
      <div className={cx('messageForm', { [className]: !!className })}>
        <Input
          ref="messageInput"
          className={css.messageInput}
          placeholder={getPlaceholder(channel, participants)}
          onKeyDown={this.handleKeyDown}
          action={{ color: 'teal', icon: 'send', onClick: this.sendMessage }}
        />
      </div>
    );
  }
}

export default connect()(MessageForm);
