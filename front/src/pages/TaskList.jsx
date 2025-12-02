// src/pages/TaskList.jsx

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../features/tasks/taskOperations";
import { useTasks } from "../hooks/useTasks";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useTasks();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <EmptyState message={error} />;

  return (
    <div className="max-w-3xl mx-auto">
      <TaskFilter />

      {tasks.length === 0 ? (
        <EmptyState message="No tasks found. Create one to get started." />
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
