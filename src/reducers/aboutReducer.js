import { SET_ABOUT_ME } from '../actions/aboutActions';
import { aboutMeData } from '../data/aboutMeData';

const initialState = {
  aboutMe: aboutMeData,
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABOUT_ME:
      return {
        ...state,
        aboutMe: action.payload,
      };
    default:
      return state;
  }
};

export default aboutReducer;
