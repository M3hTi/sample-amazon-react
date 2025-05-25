import { Link } from "react-router-dom";

function Button({ children, to, className, onClick, disabled = false }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
