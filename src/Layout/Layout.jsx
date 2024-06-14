import "./layout.css"

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="body">
                <Outlet />
            </main>
        </>
    )
}

export default Layout