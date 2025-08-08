import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";
import { useLogout } from "../authentication/useLogout";

function Account() {
  const { logout, loggingOut } = useLogout();
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Account Dashboard
        </h1>
        <p className="text-gray-600">
          Select an option from the sidebar to get started
        </p>
        <Button onClick={() => logout()}>
          {loggingOut ? <MiniLoading /> : "logout"}
        </Button>
      </div>
    </div>
  );
}

export default Account;
