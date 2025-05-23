import "./logo.css";

function Logo() {
  const disableNav = () => {
    const navlinks = document.querySelector("body");
    navlinks.classList.remove("nav-active");
  };

  return (
    <a className="logo" href="#" onClick={disableNav}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
        License - https://fontawesome.com/license/free Copyright 2025 Fonticons,
        Inc.
        <path d="m168.5 72 87.5 93 87.5-93h-175zm215.4 27.1L311.5 176h129l-56.6-76.9zm50 124.9H78.1L256 420.3 433.9 224zM71.5 176h129l-72.4-76.9L71.5 176zm434.3 40.1-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8h240c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z" />
      </svg>
    </a>
  );
}

export default Logo;
