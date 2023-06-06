import "./Topbar.css";
import pokeballLight from "../../images/pokeballLight.png";
import pokeballDark from "../../images/pokeballDark.png";

function Topbar() {
  return (
    <div className="title">
      <div className="title__left">
        <div className="left">
          <img
            src={pokeballLight}
            alt="pokeball"
            style={{ width: "30px" }}
          />
        </div>
      </div>
      <p>Pokedex</p>
      <div className="title__right">
        <div className="right">
          <img
            src={pokeballDark}
            alt="pokeball"
            style={{ width: "30px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
