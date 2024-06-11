import {
  SET_PROJECTS,
  SET_PROJECTS_ERROR,
  SET_SEARCH_PROJECT,
} from '../actions/projectsActions';

const initialState = {
  projects: [],
  error: null,
  searchProject: '',
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
    default:
      return state;
  }
};

export default projectsReducer;
