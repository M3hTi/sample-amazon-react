import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./features/dashboard/Account";
import Comments from "./features/dashboard/Comments";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PreviewPage from "./pages/PreviewPage";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import ContactUs from "./ui/ContactUs";

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
              <Route path=":id" element={<PreviewPage />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route path="account/edit" element={<Account />} />
                <Route path="account/comments" element={<Comments />} />
              </Route>
            </Route>
            <Route path="contactus" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </>
  );
}

export default App;
