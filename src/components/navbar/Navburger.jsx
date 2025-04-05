import "./navburger.css";

function Navburger({ toggleNav }) {
  return (
    <div class="navbar__burger" onClick={toggleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Navburger;
