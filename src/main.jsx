import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";
import portfolioStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={portfolioStore}>
      <App />
    </Provider>
  </StrictMode>
);
