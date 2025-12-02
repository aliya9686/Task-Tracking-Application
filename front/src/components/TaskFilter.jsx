// src/components/TaskFilter.jsx

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  const options = [
    { value: "all", label: "All" },
    { value: "assigned", label: "Assigned to Me" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-3 mb-4">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => dispatch(setFilter(opt.value))}
          className={`px-3 py-1 rounded-full text-sm border transition ${
            filter === opt.value
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
