// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import aboutReducer from './aboutReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  about: aboutReducer,
  projects: projectsReducer,
});

export default rootReducer;
