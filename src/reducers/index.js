import { combineReducers } from "redux";
import { tasksReducer } from "./tasks.js";
import { themeReducer } from "./theme.js";

export const rootReducer = combineReducers({
  theme: themeReducer,
  tasks: tasksReducer,
});
