import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

function GoHome() {
  return (
    <div className="fixed right-7 bottom-7">
      <Link
        to="/"
        className="block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 p-3 transition-all duration-300 hover:bg-yellow-500"
      >
        <HiHome className="text-5xl" />
      </Link>
    </div>
  );
}

export default GoHome;
