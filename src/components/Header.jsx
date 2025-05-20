import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-400">
      <Link>Home</Link>
      <Link>Products</Link>
    </header>
  );
}

export default Header;
