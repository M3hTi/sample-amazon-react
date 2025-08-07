import { Link } from "react-router-dom";

function CustomerServie() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
      <ul className="space-y-2">
        <li>
          <Link
            to="/contactus"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="text-gray-300 transition-colors hover:text-white">
            Returns
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className="text-gray-300 transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CustomerServie;
