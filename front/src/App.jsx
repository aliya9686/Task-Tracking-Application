import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/new" element={<AddTask />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Route>

      {/* Catch all unknown paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
