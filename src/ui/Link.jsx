import { NavLink } from "react-router-dom";

function Link({ children, to }) {
  return (
    <li className="transition-all duration-200 hover:translate-x-1">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "block w-full rounded-md bg-yellow-100 px-3 py-2 font-medium text-stone-800"
            : "block w-full rounded-md px-3 py-2 text-stone-600 hover:bg-yellow-50 hover:text-stone-800"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default Link;
