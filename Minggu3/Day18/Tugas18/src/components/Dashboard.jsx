import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate('/login')
    }

    return (
        <div className="dashboard-container"> 
            <div className="dashboard-sidebar">
                <h2>Ini Halaman Dashboard</h2>

                <Link to={'profile'}>Profile</Link>
                <Link to={'setting'}>Setting</Link>
             <hr />
                <button className="logout-btn" onClick={handleLogout}>Keluar</button>
            </div>
            <div className="dashboard-content">
                <Outlet/>
            </div>
        </div>
    )
}