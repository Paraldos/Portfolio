import "./navbar.css";
import "./navlinks.css";
import Logo from "../logo/Logo";
import Navburger from "./Navburger";
import Navlinks from "./Navlinks";

function Navbar() {
  const toggleNav = () => {
    const navlinks = document.querySelector(".navbar__links");
    navlinks.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <Logo />
      <Navburger toggleNav={toggleNav} />
      <Navlinks toggleNav={toggleNav} />
    </nav>
  );
}

export default Navbar;
