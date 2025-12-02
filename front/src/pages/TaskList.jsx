import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../features/tasks/taskOperations";

const TaskList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  if (loading)
    return <p className="text-blue-600 text-center mt-6">Loading tasks...</p>;
  if (error) return <p className="text-red-600 text-center mt-6">{error}</p>;
  if (list.length === 0)
    return <p className="text-gray-500 mt-6 text-center">No tasks found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>

      <ul className="space-y-3">
        {list.map((task) => (
          <li
            key={task.id}
            className="p-4 border rounded bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-600 text-sm">{task.description}</p>
            <p className="text-sm mt-1">
              Status: <span className="font-medium">{task.status}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
