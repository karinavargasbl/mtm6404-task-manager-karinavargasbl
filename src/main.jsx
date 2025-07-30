import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { TaskProvider } from "./context/TaskContext";  // <-- ruta correcta
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);
