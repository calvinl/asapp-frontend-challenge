import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatPanel from 'components/ChatPanel';
import { fetchChannel } from 'actions/channel';

class Chat extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { dispatch, channel } = this.props;

    if (!channel.isLoaded) {
      dispatch(fetchChannel('private'));
    }
  }

  render() {
    return (
      <ChatPanel {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  channel: state.channel
});

export default connect(mapStateToProps)(Chat);
