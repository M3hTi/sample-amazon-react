import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

function GoHome() {
  return (
    <div className="fixed right-7 bottom-7">
      <Link
        to="/"
        className="block rounded-full bg-blue-300 p-3 transition-all duration-300 hover:bg-blue-500"
      >
        <HiHome className="text-5xl" />
      </Link>
    </div>
  );
}

export default GoHome;
