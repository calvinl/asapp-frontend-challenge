import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  ADD_TYPIST,
  REMOVE_TYPIST,
  CLEAR_TYPISTS,
  CLEAR_CHANNEL
} from 'constants/channel';
import { fakeFetch } from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';
import mockChannel from 'fixtures/mockChannel';
import mockMessage from 'fixtures/mockMessage';

export const addTypist = generateActionCreator(ADD_TYPIST, 'user');
export const removeTypist = generateActionCreator(REMOVE_TYPIST, 'user');
export const clearTypists = generateActionCreator(CLEAR_TYPISTS);

const sendMessageRequest = generateActionCreator(SEND_MESSAGE_REQUEST);
const sendMessageSuccess = generateActionCreator(SEND_MESSAGE_SUCCESS, 'message');
const sendMessageFailure = generateActionCreator(SEND_MESSAGE_FAILURE, 'error');

export const sendMessage = (messageProps) => {
  return dispatch => {
    dispatch(sendMessageRequest());

    // no network latency to simulate optimistic response.
    return fakeFetch(mockMessage(messageProps), 0)
      .then(message => dispatch(sendMessageSuccess(message)))
      .catch(error => dispatch(sendMessageFailure(error)));
  };
};

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
