import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ Import your global CSS entry here
import "./index.css"; // or whatever your global file is called

createRoot(document.getElementById("root")!).render(<App />);
