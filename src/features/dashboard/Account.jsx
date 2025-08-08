import Button from "../../ui/Button";
import Error from "../../ui/Error";
import MiniLoading from "../../ui/MiniLoading";
import Spinner from "../../ui/Spinner";
import { useLogout } from "../authentication/useLogout";
import { useUser } from "../authentication/useUser";

function Account() {
  const { logout, loggingOut } = useLogout();
  const { user, isLoading, isError, error } = useUser();
  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && isError) {
    return <Error>{error.message}</Error>;
  }
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          <span>{user?.user_metadata?.fullName}'s</span> Account Dashboard
        </h1>
        <p className="text-gray-600">
          Select an option from the sidebar to get started
        </p>
        <Button className="cursor-pointer" onClick={() => logout()}>
          {loggingOut ? <MiniLoading /> : "logout"}
        </Button>
      </div>
    </div>
  );
}

export default Account;
