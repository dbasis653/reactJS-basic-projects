import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import customReact from ".../customReact/customReact.js";

const root = createRoot(document.getElementById("root")).render(<App />);
