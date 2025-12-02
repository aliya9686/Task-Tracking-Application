// src/components/TaskCard.jsx

import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateHelper";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

const TaskCard = ({ task }) => {
  const statusClass = statusColors[task.status] || "bg-gray-100 text-gray-800";

  return (
    <li className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            <Link to={`/tasks/${task.id}`} className="hover:underline">
              {task.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {task.description}
          </p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${statusClass}`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-3">
        <span>AID: {task.assigneeid ?? task.assigneeId ?? "-"}</span>
        <span>Due: {formatDate(task.duedate ?? task.dueDate)}</span>
      </div>
    </li>
  );
};

export default TaskCard;
