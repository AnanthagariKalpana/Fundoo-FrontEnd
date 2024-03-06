import HeaderContainer from "./HeaderContainer";
import { Outlet } from "react-router-dom";
function Dashboard()
{
    return (
    <>
    <HeaderContainer/>
    <Outlet/>
    </>)
}
export default Dashboard;