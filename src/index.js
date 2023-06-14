import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'


AOS.init();


const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
      
    </React.StrictMode>
  </BrowserRouter>
);

