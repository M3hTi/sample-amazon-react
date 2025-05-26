import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import OverlayProvider from "./context/Overlay.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </StrictMode>,
);
