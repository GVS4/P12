import { combineReducers } from '@reduxjs/toolkit';
import jspReducer from './jspReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
  jsp: jspReducer,
  projects: projectsReducer,
});
