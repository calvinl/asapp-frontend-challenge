import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  ADD_TYPIST,
  REMOVE_TYPIST,
  CLEAR_TYPISTS,
  CLEAR_CHANNEL
} from 'constants/channel';
import { find } from 'lodash';

const defaultState = {
  isLoading: false,
  isLoaded: false,
  isSending: false,
  isSent: false,
  participants: [],
  messages: [],
  typists: [],
  error: null
};

const channel = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TYPIST: {
      const typist = find(state.typists, { handle: action.user.handle });

      if (typist) {
        return state;
      }

      return {
        ...state,
        typists: [...state.typists, action.user]
      };
    }

    case REMOVE_TYPIST:
      return {
        ...state,
        typists: state.typists.filter(
          typist => typist.handle !== action.user.handle
        )
      };

    case CLEAR_TYPISTS:
      return { ...state, typists: [] };

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
