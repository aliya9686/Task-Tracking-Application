import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAllTasks,
  updateTask,
  deleteTask,
} from "../features/tasks/taskOperations";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list: tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((t) => t.id === Number(id));

  const [status, setStatus] = useState(task?.status);

  useEffect(() => {
    if (!task) dispatch(getAllTasks());
  }, [task, dispatch]);

  if (!task) return <p>Loading...</p>;

  const handleStatusChange = async (newStatus) => {
  const updatedTask = {
    ...task,
    status: newStatus,
  };

  try {
    await dispatch(updateTask({ id: task.id, data: updatedTask })).unwrap();
  } catch (error) {
    console.error("Error updating:", error);
  }
};

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      dispatch(deleteTask(id));
      navigate("/");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 space-y-4">
      <h2 className="text-2xl font-bold">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>

      {/* Update Status */}
      <div className="space-y-2">
        <label>Status:</label>
        <select
          className="border p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleStatusChange}
        >
          Update Status
        </button>
      </div>

      {/* Delete Task */}
      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={handleDelete}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskDetails;
