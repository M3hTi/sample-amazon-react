import { Outlet } from "react-router-dom"

function Main() {
    return (
        <main className="max-w-4xl">
            <Outlet />
        </main>
    )
}

export default Main
