import { createRoot } from "react-dom/client";
import App from "./App";
import { loadAnalytics } from "./lib/loadAnalytics";
import "./index.css";

loadAnalytics();
createRoot(document.getElementById("root")!).render(<App />);
