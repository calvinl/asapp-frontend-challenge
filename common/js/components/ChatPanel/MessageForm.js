import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { debounce } from 'lodash';
import classnames from 'classnames/bind';
import css from './MessageForm.scss';
import { sendMessage, addTypist, removeTypist } from 'actions/channel';
import { humanString } from 'lib/channelHelper';

const cx = classnames.bind(css);

class MessageForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired,
    participants: PropTypes.array,
    className: PropTypes.string
  }

  getPlaceholder = () => {
    const { channel, user } = this.props;
    switch (channel.type) {
      default:
      case 'private':
        return `Message ${humanString(channel.participants, user)}`;
      case 'channel':
        return `Message #${channel.name}`;
    }
  };

  sendMessage = (messageBody = null) => {
    const { onOutgoingMessage, user, channel, dispatch } = this.props;
    const { messageInput } = this.refs;
    const body = messageBody || messageInput.inputRef.value;

    if (body && body !== '') {
      const message = { sender: user, channelId: channel.id, body };

      dispatch(sendMessage(message));
      onOutgoingMessage(message);
      dispatch(removeTypist(user));

      messageInput.inputRef.value = '';
    }
  }

  handleKeyDown = (ev) => {
    const { keyCode } = ev;
    const { messageInput } = this.refs;
    const body = messageInput.inputRef.value;

    if (keyCode === 13) {
      this.sendMessage(body);
    }
  }

  // This is debounced for performance so that it does not
  // check the message body on every single key up action. The
  // 350ms debounce timeout can be tweaked. Leading is true
  // so that we can immediately notify of typing right from
  // the start.
  handleKeyUp = debounce(() => {
    console.log('called', ++this.counter, 'times.');
    const { dispatch, user, channel: { typists } } = this.props;
    const { messageInput } = this.refs;
    const body = messageInput.inputRef.value;
    const isTyping = typists.map(t => t.handle).includes(user.handle);
    const isBlank = !body || body && body === '';

    if (!isTyping && !isBlank) {
      dispatch(addTypist(user));
    } else if (isTyping && isBlank) {
      dispatch(removeTypist(user));
    }
  }, 350, { leading: true })

  renderTypists = () => {
    const { user, channel: { typists } } = this.props;
    const people = typists.filter(u => u.handle !== user.handle);
    const len = people.length;

    if (!len) return false;

    return `${humanString(people, user)} ${len > 1 ? 'are' : 'is'} typing...`;
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cx('messageForm', { [className]: !!className })}>
        <Input
          ref="messageInput"
          className={css.messageInput}
          placeholder={this.getPlaceholder()}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          action={{ color: 'teal', icon: 'send', onClick: this.sendMessage }}
        />
        <div className={css.typingIndicator}>{this.renderTypists()}</div>
      </div>
    );
  }
}

export default connect()(MessageForm);
