import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";

import "./index.css";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 2 * 1000 * 60 * 60,
      refetchOnMount: false,
      refetchInterval: 2 * 60 * 60 * 1000, // 2 hours in milliseconds
      staleTime: 2 * 60 * 60 * 1000,
      cacheTime: 2 * 60 * 60 * 1000,
      useHydrate: true,
    },
  },
});
const persister = createWebStoragePersistor({
  storage: window.localStorage,
});
persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 2, // 2 hours
});
// persistQueryClient({
//   queryClient,
//   persistor: localStoragePersistor,
// });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      <App />
      <ToastContainer toastStyle={{ backgroundColor: "#03031b" }} />
    </QueryClientProvider>
  </React.StrictMode>
);
