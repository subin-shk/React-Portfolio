import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav mb-5 z-10 bg-white mt-20 ">
      <ul className="flex justify-center space-x-5">
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
