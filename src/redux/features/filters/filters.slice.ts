import { createSlice } from "@reduxjs/toolkit";
import type { IFilterStatus } from "./filters.type";

interface initialState {
  priority: string;
}

const initialState: IFilterStatus = {
  query: "",
  priority: "all",
  status: "all",
  sort: "oldest",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
    changePriority: (state, action) => {
      state.priority = action.payload;
    },
    changeStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    changeSortMode: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  changeQuery,
  changePriority,
  changeStatusFilter,
  changeSortMode,
} = filterSlice.actions;
export default filterSlice.reducer;
