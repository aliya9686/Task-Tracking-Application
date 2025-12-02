// src/hooks/useTasks.js

import { useSelector } from "react-redux";

export function useTasks() {
  const { list, loading, error, filter } = useSelector((state) => state.tasks);

  const filteredTasks = list.filter((task) => {
    if (filter === "all") return true;
    if (filter === "assigned") {
      // later we can use logged-in user ID dynamically
      const currentUserId = 1;
      return Number(task.assigneeid ?? task.assigneeId) === currentUserId;
    }
    if (filter === "completed") {
      return task.status === "completed";
    }
    return true;
  });

  return {
    tasks: filteredTasks,
    loading,
    error,
    filter,
  };
}
