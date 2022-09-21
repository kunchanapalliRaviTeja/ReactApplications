import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import demo2 from "./demo2";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App /> 
    <demo2/>
  </StrictMode>
);
