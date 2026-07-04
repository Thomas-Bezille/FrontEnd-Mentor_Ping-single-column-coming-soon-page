import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/libre-franklin/300.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/700.css";
import "./index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
