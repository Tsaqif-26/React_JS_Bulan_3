import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {

    return (
        <div className="dashboard-container"> 
            <div className="dashboard-sidebar">
                <h2>Ini Halaman Dashboard</h2>

                <Link to={'profile'}>Profile</Link>
                <Link to={'setting'}>Setting</Link>
             <hr />
            </div>
            <div className="dashboard-content">
                <Outlet/>
            </div>
        </div>
    )
}