import { createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";

// Fetch tasks
export const getAllTasks = createAsyncThunk("tasks/getAll", async () => {
  const res = await taskApi.getAll();
  return res.data || []; // Ensure array even if undefined
});

// Create task
export const createTask = createAsyncThunk("tasks/create", async (taskData) => {
  const res = await taskApi.create(taskData);
  return res.data?.task; // Optional chaining to avoid crash
});

// Update task
export const updateTask = createAsyncThunk("tasks/update", async ({ id, data }) => {
  const res = await taskApi.update(id, data);
  return res.data?.task;
});

// Delete task
export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  await taskApi.delete(id);
  return id;
});
