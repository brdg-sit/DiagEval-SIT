import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { ClearBrowserCacheBoundary } from "react-clear-browser-cache";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClearBrowserCacheBoundary auto fallback="Loading" duration={60000}>
    <App />
  </ClearBrowserCacheBoundary>
);
