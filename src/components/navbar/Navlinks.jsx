function Navlink({ toggleNav }) {
  var links = [
    { name: "About Me", url: "#about" },
    { name: "Curriculum Vitae", url: "#resume" },
    { name: "Web Projects", url: "#webpages" },
    { name: "Game Projects", url: "#games" },
  ];

  return (
    <ul className="navbar__links">
      {links.map((link) => (
        <li className="navbar__link" onClick={toggleNav} key={link.name}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Navlink;
