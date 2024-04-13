import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(
  document.getElementById("extension-root") as HTMLElement
);
root.render(<App />);
