import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.jsx";
import OverlayProvider from "./context/Overlay.jsx";
import FallBack from "./ui/FallBack.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={FallBack}
    onReset={() => window.location.replace("/")}
  >
    <StrictMode>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </StrictMode>
  </ErrorBoundary>,
);
