// src/features/tasks/taskSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks, createTask, updateTask, deleteTask } from "./taskThunks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    error: null,
    filter: "all", 
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createTask.fulfilled, (state, action) => {
        if (action.payload) state.list.push(action.payload);
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        const updated = action.payload;
        if (!updated) return;
        const index = state.list.findIndex((t) => t.id === updated.id);
        if (index !== -1) state.list[index] = updated;
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        const id = action.payload;
        state.list = state.list.filter((t) => t.id !== id);
      });
  },
});

export const { setFilter } = taskSlice.actions;
export default taskSlice.reducer;
