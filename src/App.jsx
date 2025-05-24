import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </>
  );
}

export default App;
