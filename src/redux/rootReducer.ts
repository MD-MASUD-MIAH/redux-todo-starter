import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./features/filters/filters.slice";
import tasksReducer from "./features/tasks/task.slice";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});
