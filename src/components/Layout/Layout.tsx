import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/comics">Comics</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
