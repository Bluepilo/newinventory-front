import { createRoot } from "react-dom/client";
import "./styles/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
