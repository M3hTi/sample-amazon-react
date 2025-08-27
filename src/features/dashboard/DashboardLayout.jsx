import { FaRegComments } from "react-icons/fa";
import { IoLogOutOutline, IoPerson } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";
import { useLogout } from "../authentication/useLogout";

function DashboardLayout() {
  const { logout, loggingOut } = useLogout();
  return (
    <div>
      <div className="h-screen bg-gray-50">
        {/* Main Content Area - Outlet */}
        <div className="mx-auto grid h-full w-7xl grid-cols-[16rem_1fr] gap-2 bg-white">
          <div className="flex h-full flex-col justify-between border-r  border-stone-200">
            <div className="space-y-3 p-6">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Dashboard
              </h2>
              <NavLink
                to="account/edit"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-gray-700 transition-colors duration-200"
                    : "flex items-center gap-2 rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200"
                }
              >
                <IoPerson />
                <span>Edit Account</span>
              </NavLink>
              <NavLink
                to="account/comments"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-gray-700 transition-colors duration-200"
                    : "flex items-center gap-2 rounded-lg px-4 py-3 text-gray-700 transition-colors duration-200"
                }
              >
                <FaRegComments />
                <span>Show Comments</span>
              </NavLink>
            </div>
            <div className="mt-auto p-6">
              <Button
                className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-3 duration-200 hover:bg-red-400"
                onClick={() => logout()}
              >
                <span>
                  <IoLogOutOutline />
                </span>
                <span>{loggingOut ? <MiniLoading /> : "logout"}</span>
              </Button>
            </div>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
