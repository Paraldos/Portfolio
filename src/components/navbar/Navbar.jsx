import "./navbar.css";
import "./navlinks.css";
import Logo from "./Logo";
import Navburger from "./Navburger";
import Navlinks from "./Navlinks";

function Navbar() {
  const toggleNav = () => {
    const navlinks = document.querySelector("body");
    navlinks.classList.toggle("nav-active");
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
