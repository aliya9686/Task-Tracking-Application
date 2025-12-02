// src/components/Header.jsx

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-lg font-semibold tracking-wide">
        Task Tracker
      </Link>

      <nav className="flex gap-3">
        <Link
          to="/"
          className={`px-3 py-1 rounded transition ${
            location.pathname === "/"
              ? "bg-slate-700"
              : "hover:bg-slate-800"
          }`}
        >
          Tasks
        </Link>

        <Link
          to="/tasks/new"
          className={`px-3 py-1 rounded transition ${
            location.pathname.startsWith("/tasks/new")
              ? "bg-green-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          + Add Task
        </Link>
      </nav>
    </header>
  );
};

export default Header;
