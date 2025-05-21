import { FaInstagram } from "react-icons/fa";

function SocialAccounts() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/mehdi_n_kh78/" target="_blank"
          className="text-gray-300 transition-colors hover:text-white"
        >
          <span className="sr-only"></span>
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default SocialAccounts;
