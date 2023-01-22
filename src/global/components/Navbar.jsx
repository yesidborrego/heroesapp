import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState: { username }, actionLogout } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const onLogout = () => {
    const lastPath = `${pathname}${search}`;
    localStorage.setItem("lastpath", lastPath);
    actionLogout();
    navigate("/login", {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>

        <hr className='border border-white border-1' />

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-sm-end align-items-center">
          <ul className="navbar-nav ml-auto">
            <li>
              <span className='nav-item nav-link text-info'>
                { username?.username }
              </span>
            </li>
            <li>
              <button
                className="nav-item nav-link btn"
                onClick={ onLogout }
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}