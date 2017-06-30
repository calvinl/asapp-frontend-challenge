import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  CLEAR_CHANNEL
} from 'constants/channel';

const defaultState = {
  isLoading: false,
  isLoaded: false,
  participants: [],
  messages: []
};

const channel = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANNEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case FETCH_CHANNEL_SUCCESS:
      console.log(action);
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
