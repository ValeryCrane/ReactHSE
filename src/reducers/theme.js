import { CHANGE_THEME } from "../actions/theme.js";

const initialState = {
  theme: 'light'
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    }
    default:
      return state;
  }
};
