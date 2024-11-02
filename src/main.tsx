import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./libs/css/index.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
