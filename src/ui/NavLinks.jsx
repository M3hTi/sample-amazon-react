import { Link } from "react-router-dom";

function NavLinks({ children, to }) {
  return (
    <Link className="block w-full p-1 hover:bg-yellow-200" to={to}>
      {children}
    </Link>
  );
}

export default NavLinks;
