import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import TaskList from "./pages/TaskList";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Route path="/" element={<TaskList />} />

    <App />
  </Provider>
);
