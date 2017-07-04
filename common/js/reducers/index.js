import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import channel from './channel';

const rootReducer = combineReducers({
  routing: routerReducer,
  channel
});

export default rootReducer;
