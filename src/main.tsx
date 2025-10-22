import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import { ErrorBoundary } from "@/core/service/error/boundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
