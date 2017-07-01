import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  CLEAR_CHANNEL
} from 'constants/channel';

const defaultState = {
  isLoading: false,
  isLoaded: false,
  isSending: false,
  isSent: false,
  participants: [],
  messages: [],
  error: null
};

const channel = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return { ...state, isSending: true };

    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isSending: false,
        isSent: true,
        messages: [...state.messages, action.message]
      };

    case SEND_MESSAGE_FAILURE:
      return { ...state, isSending: false, isSent: false };

    case FETCH_CHANNEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };

    case FETCH_CHANNEL_SUCCESS:
      return {
        ...state,
        ...action.channel,
        isLoading: false,
        isLoaded: true
      };

    case FETCH_CHANNEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error: action.error
      };

    case CLEAR_CHANNEL:
      return defaultState;

    default:
      return state;
  }
};

export default channel;
