import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import ChatPanel from 'components/ChatPanel';
import { fetchChannel } from 'actions/channel';
import url from 'url';

class Chat extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired,
    channelProps: PropTypes.object.isRequired
  }

  socket = null

  componentWillMount() {
    const { dispatch, channelProps } = this.props;

    dispatch(fetchChannel(channelProps));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, channelProps } = this.props;
    const { channelProps: prevChannelProps } = prevProps;

    // check if channel props changed.
    if (!isEqual(channelProps, prevChannelProps)) {
      dispatch(fetchChannel(channelProps));
    }
  }

  // componentDidMount() {
  //   if (!this.socket) {
  //     const { host } = url.parse(window.location.href);
  //
  //     this.socket = new WebSocket(`ws://${host}`);
  //
  //     this.socket.addEventListener('open', () => {
  //       console.log('Connected on ws://localhost:3000.');
  //     });
  //
  //     this.socket.addEventListener('message', (event) => {
  //       console.log('message received:', event);
  //     });
  //   }
  // }

  handleIncomingMessage = (message) => {
    console.log('Incoming:', message);
  }

  handleOutgoingMessage = (message) => {
    console.log('Outgoing:', message);
    // this.socket.send(message);
  }

  render() {
    return (
      <ChatPanel {...this.props}
        onIncomingMessage={this.handleIncomingMessage}
        onOutgoingMessage={this.handleOutgoingMessage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  channel: state.channel
});

export default connect(mapStateToProps)(Chat);
