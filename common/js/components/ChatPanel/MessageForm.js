import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { last, debounce } from 'lodash';
import classnames from 'classnames/bind';
import css from './MessageForm.scss';
import { sendMessage, addTypist, removeTypist } from 'actions/channel';

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

  counter = 0;

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
    const joiner = (arr, str) => arr.map(t => t.handle).join(str);

    if (!len) return false;

    switch (len) {
      case 1:
        // one person: 'laura is typing...'
        return `${people[0].handle} is typing...`;
      case 2:
        // two people: 'laura and rob are typing...'
        return `${joiner(people, ' and ')} are typing...`;
      case 3: {
        // three people: 'laura, rob and drake are typing...'
        return `${joiner(people.slice(0, len - 2), ', ')} and ${last(people).handle} are typing...`;
      }
      case 4:
      default: {
        // four or more people: 'laura, rob, and 18 people are typing...';
        return `${joiner(people.slice(0, 2), ', ')} and ${len - 2} people are typing...`;
      }
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
          onKeyUp={this.handleKeyUp}
          action={{ color: 'teal', icon: 'send', onClick: this.sendMessage }}
        />
        <div className={css.typingIndicator}>{this.renderTypists()}</div>
      </div>
    );
  }
}

export default connect()(MessageForm);
