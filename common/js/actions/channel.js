import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  CLEAR_CHANNEL
} from 'constants/channel';
import { fakeFetch } from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';
import mockChannel from 'fixtures/mockChannel';

const fetchChannelRequest = generateActionCreator(FETCH_CHANNEL_REQUEST);
const fetchChannelSuccess = generateActionCreator(FETCH_CHANNEL_SUCCESS, 'channel');
const fetchChannelFailure = generateActionCreator(FETCH_CHANNEL_FAILURE, 'error');

export const fetchChannel = (channelProps) => {
  return dispatch => {
    dispatch(fetchChannelRequest());

    // simulate a trip to the server
    return fakeFetch(mockChannel(channelProps))
      .then(channel => dispatch(fetchChannelSuccess(channel)))
      .catch(error => dispatch(fetchChannelFailure(error)));
  };
};

export const clearChannel = generateActionCreator(CLEAR_CHANNEL);
