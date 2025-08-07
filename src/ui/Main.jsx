import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="mx-auto w-full max-w-[1920px]">
      <Outlet />
    </div>
  );
}

export default Main;
