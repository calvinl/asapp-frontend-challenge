import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatPanel from 'components/ChatPanel';

class Chat extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    return (
      <ChatPanel {...this.props} />
    );
  }
}

export default connect()(Chat);
