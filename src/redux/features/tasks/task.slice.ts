import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  name: string;
  description: string;
  priority: string;
  status: string;
}

const initialState:initialState = {
  name: "",
  description: "",
  priority: "",
  status: "",
};

const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});


export default tasksSlice.reducer