import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { Context } from "./context/Context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
