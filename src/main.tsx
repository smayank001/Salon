import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your credentials
emailjs.init("KkOx49K8AG7DME-17");

createRoot(document.getElementById("root")!).render(<App />);