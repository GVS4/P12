// src/reducers/projectsReducer.js

import {
  SET_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_SEARCH_PROJECT,
  SET_SINGLE_PROJECT,
} from '../actions/projectsActions';

const initialState = {
  projects: [],
  error: null,
  searchProject: '',
  singleProject: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        error: null,
      };
    case SET_PROJECTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SEARCH_PROJECT:
      return {
        ...state,
        searchProject: action.payload,
      };
    case SET_SINGLE_PROJECT:
      return {
        ...state,
        singleProject: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
