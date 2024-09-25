import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    // Importamos el hook useNavigate de react-router-dom para redirigir entre rutas
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                    /* De esta forma definimos la clase activa si estamos trabajando con boostrap */
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel 
                    </NavLink>

                    <NavLink
                    /* De esta forma definimos la clase activa */
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                    /* De esta forma definimos la clase activa */
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        Dayron
                    </span>

                    <button
                        onClick={handleLogout}
                        className="nav-item nav-link btn"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}