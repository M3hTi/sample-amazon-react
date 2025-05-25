function Error({ children, className = "" }) {
  return (
    <div className={className}>
      <p className="text-center font-semibold text-red-500">{children}</p>
    </div>
  );
}

export default Error;
