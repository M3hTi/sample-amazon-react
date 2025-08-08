import { FaRegComments } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content Area - Outlet */}
        <div className="mx-auto flex w-7xl gap-2 bg-white">
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
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
