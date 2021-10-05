import { ReactChildren, ReactChild } from 'react';
import { NavLink } from "react-router-dom";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

function Layout({ children }:AuxProps) {
    return (
      <>
        <nav>
          <ul className="navigation">
            <li>
              <NavLink
                className="baseNavLink"
                activeClassName="activeNavLink"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="baseNavLink"
                activeClassName="activeNavLink"
                to="/heroes"
              >
                all heroes
              </NavLink>
            </li>            
            <li>
              <NavLink
                className="baseNavLink"
                activeClassName="activeNavLink"
                to="/hero"
              >
                album
              </NavLink>
            </li>
          </ul>
        </nav>
        <main>
          {children}
        </main>
      </>
    );
}

export default Layout;
