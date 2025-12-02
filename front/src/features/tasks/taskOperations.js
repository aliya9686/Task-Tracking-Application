

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Get all tasks
export const getAllTasks = createAsyncThunk(
  "tasks/getAll",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// Add new task
export const createTask = createAsyncThunk(
  "tasks/create",
  async (taskData) => {
    const res = await axios.post(API_URL, taskData);
    return res.data.task;
  }
);

// Update task
export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ id, data }) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data.task;
  }
);

// Delete task
export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
