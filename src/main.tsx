import { createRoot } from "react-dom/client";
import ScrollToTop from "@/components/ScrollToTop";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
