import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";
import Error from "../ui/Error";
import Spinner from "../ui/Spinner";
function ProtectRoute({ children }) {
  const { isLoading, isAuthenticated, isError, error } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isError && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate, isError]);
  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && isError) {
    return <Error>{error.message}</Error>;
  }

  if (!isLoading && !isError && isAuthenticated) {
    return children;
  }

  return null;
}

export default ProtectRoute;
