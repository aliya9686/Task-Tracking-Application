import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-2">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>

      <Link
        to="/"
        className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition"
      >
        Go to Task List
      </Link>
    </div>
  );
};

export default NotFound;
