import { Link } from "react-scroll";
import "./navbar.scss";

const pages = ["about", "experience", "projects"];

const Navbar = () => {
  const renderNavBarLinks = () => {
    return pages.map((item, index) => (
      <li key={index}>
        <Link
          activeClass="active"
          className="navLinks"
          to={item}
          spy={true}
          smooth={true}
          duration={100}
        >
          <span className="dash">&nbsp;</span>
          {item}
        </Link>
      </li>
    ));
  };

  return <nav>{renderNavBarLinks()}</nav>;
};

export default Navbar;
