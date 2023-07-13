import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            exact
            className={`nav-link ${
              location.pathname === '/' ? 'active-link' : ''
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            exact
            className={`nav-link ${
              location.pathname === '/movies' ? 'active-link' : ''
            }`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </>
  );
};
