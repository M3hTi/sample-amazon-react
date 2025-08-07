import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordToggleIcon({ showPass, setShowPass }) {
  return (
    <span
      onClick={() => setShowPass((c) => !c)}
      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >
      {showPass ? (
        <FaEye className="h-5 w-5" />
      ) : (
        <FaEyeSlash className="h-5 w-5" />
      )}
    </span>
  );
}

export default PasswordToggleIcon;
