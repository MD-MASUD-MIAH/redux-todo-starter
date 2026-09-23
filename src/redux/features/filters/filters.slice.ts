import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  priority: string;
}

const initialState: initialState = {
  priority: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export default filterSlice.reducer;
