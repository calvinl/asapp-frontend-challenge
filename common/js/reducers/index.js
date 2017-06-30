import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import todos from './todos';
import channel from './channel';

const rootReducer = combineReducers({
  routing: routerReducer,
  todos,
  channel
});

export default rootReducer;
