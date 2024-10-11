import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import ErrorBoundary from "shared/ErrorBoundaryFallback/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false,
       retry: 0,
     },
   },
 });
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StyledEngineProvider>
    </QueryClientProvider>
  </StrictMode>
);
