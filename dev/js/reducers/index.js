import {combineReducers} from 'redux';
import ActiveIndexReducer from './reducer-active-index'
import SectionsReducer from './reducer-sections'

const allReducers = combineReducers({
  activeIndex: ActiveIndexReducer,
  sections: SectionsReducer
});

export default allReducers;
