import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav py-3 mb-5 z-10 bg-white shadow-md">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
