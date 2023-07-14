import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Styles.css';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
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
            className={`nav-link ${
              location.pathname === '/movies' ? 'active-link' : ''
            }`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
