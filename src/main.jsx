import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./Context.jsx";
import { AuthProvider } from "./AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>
);
