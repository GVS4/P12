import { SET_PROJECTS, SET_PROJECTS_ERROR } from '../actions/projectsActions';

const initialState = {
  data: [],  // Renommé projects en data
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        data: action.payload,  // Renommé projects en data
        error: null,
      };
    case SET_PROJECTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
