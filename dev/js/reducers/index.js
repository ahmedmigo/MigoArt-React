import {combineReducers} from 'redux';
import ActiveSectionReducer from './reducer-active-section'
import SectionsReducer from './reducer-sections'

const allReducers = combineReducers({
  activeSection: ActiveSectionReducer,
  sections: SectionsReducer
});

export default allReducers;
