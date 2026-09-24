import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask, TInitialState } from "./task.type";

const initialState: TInitialState[] = [];

const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      prepare: (
        input: Pick<ITask, "title" | "description" | "status" | "priority">,
      ) => {
        const task = {
          id: nanoid(),
          title: input.title.trim(),
          description: input.description.trim(),
          status: input.status,
          priority: input.priority,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        return { payload: task };
      },

      reducer: (state, action: PayloadAction<ITask>) => {
        state.push(action.payload);
      },
    },

    deleteTask: (state, action: PayloadAction<string>) => {
    return state.filter((task) => task.id !== action.payload);
  }
  },
});

export const { addTask,deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
