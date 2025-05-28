import SideBar from "@components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div className="flex justify-center w-full ">
            <div className="flex flex-col tb:flex-row gap-4 tb:gap-20 w-[1440px] justify-start max-w-full  p-5 ">
                <SideBar />
                <main className="max-w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;