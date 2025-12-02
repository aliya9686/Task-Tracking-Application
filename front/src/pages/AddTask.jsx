// src/pages/AddTask.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/tasks/taskOperations";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    assigneeId: "",
    status: "pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "assigneeId" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createTask(form));
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Task</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="w-full border rounded px-3 py-2"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          className="w-full border rounded px-3 py-2"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="assigneeId"
          className="w-full border rounded px-3 py-2"
          placeholder="Assignee ID"
          value={form.assigneeId}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          className="w-full border rounded px-3 py-2"
          value={form.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          name="dueDate"
          className="w-full border rounded px-3 py-2"
          value={form.dueDate}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800"
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
