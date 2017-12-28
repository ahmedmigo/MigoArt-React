import {combineReducers} from 'redux';
import ActiveSectionReducer from './reducer-active-section'
import SectionsReducer from './reducer-sections'

const allReducers = combineReducers({
  sections: SectionsReducer,
  activeSection: ActiveSectionReducer,
});

export default allReducers;
