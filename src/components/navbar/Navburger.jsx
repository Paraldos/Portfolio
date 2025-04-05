import "./navburger.css";

function Navburger({ toggleNav }) {
  return (
    <div className="navbar__burger" onClick={toggleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Navburger;
