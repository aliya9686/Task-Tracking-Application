// src/pages/TaskDetails.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask, getAllTasks } from "../features/tasks/taskThunks";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import { formatDate } from "../utils/dateHelper";

const TaskDetails = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list, loading } = useSelector((state) => state.tasks);
  const taskData = list.find((t) => t.id === numericId);

  const [task, setTask] = useState(taskData || null);

  useEffect(() => {
    if (!taskData) {
      dispatch(getAllTasks());
    }
  }, [dispatch, taskData]);

  useEffect(() => {
    if (taskData) setTask(taskData);
  }, [taskData]);

  if (loading && !task) return <Loader />;
  if (!task) return <EmptyState message="Task not found" />;

  const handleStatusChange = async (e) => {
    const updatedStatus = e.target.value;

    const updatePayload = {
      ...task,
      status: updatedStatus,
      assigneeId: task.assigneeid ?? task.assigneeId,
      dueDate: task.duedate ?? task.dueDate,
    };

    await dispatch(updateTask({ id: numericId, data: updatePayload }));
  };

  const handleDelete = async () => {
    await dispatch(deleteTask(numericId));
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-600 mb-4">{task.description}</p>

      <div className="space-y-3 text-sm text-gray-700">
        <div><strong>Assignee ID:</strong> {task.assigneeid ?? task.assigneeId}</div>
        <div><strong>Due Date:</strong> {formatDate(task.duedate ?? task.dueDate)}</div>

        <div>
          <strong>Status:</strong>
          <select
            value={task.status}
            onChange={handleStatusChange}
            className="ml-2 border px-2 py-1 rounded"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskDetails;
