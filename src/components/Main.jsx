import { Outlet } from "react-router-dom"

function Main() {
    return (
        <div className="max-w-4xl">
            <Outlet />
        </div>
    )
}

export default Main
