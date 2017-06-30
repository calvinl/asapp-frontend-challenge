import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  CLEAR_CHANNEL
} from 'constants/channel';
import { fetch } from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

const fetchChannelRequest = generateActionCreator(FETCH_CHANNEL_REQUEST);
const fetchChannelSuccess = generateActionCreator(FETCH_CHANNEL_SUCCESS, 'channel');
const fetchChannelFailure = generateActionCreator(FETCH_CHANNEL_FAILURE, 'error');
export const clearChannel = generateActionCreator(CLEAR_CHANNEL);

export const fetchChannel = (name) => {
  return dispatch => {
    dispatch(fetchChannelRequest());

    // simulate a trip to the server
    return fetch(require(`fixtures/${name}`).default)
      .then(channel => dispatch(fetchChannelSuccess(channel)))
      .catch(error => dispatch(fetchChannelFailure(error)));
  };
};
