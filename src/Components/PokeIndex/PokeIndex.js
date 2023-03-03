import React from "react";
import "./PokeIndex.css";
import ragip from "../../assets/empoleonD.png";

function PokeIndex(props) {
  return (
    <div className="pokeindex">
      <div className="img-emp">
        <img src={ragip} alt="empoleon" style={{ width: "340px" }} />
      </div>
      <div className="pdex-num">#395</div>
      <div className="pdex-title">Empoleon</div>
      <div className="pdex-sub-title">Emperor Pokemon</div>
      <div className="container-order" style={{ justifyContent: "center" }}>
        <div
          className="pdex-attirbutes"
          style={{ backgroundColor: "cornflowerblue" }}
        >
          WATER
        </div>
        <div
          className="pdex-attirbutes"
          style={{ backgroundColor: "slategrey" }}
        >
          STEEL
        </div>
      </div>
      <div className="pdex-text-600">Pokedex Entry</div>
      <div className="pdex-text-p">
        It swims as fast as a jet boat. The edges of its wings are sharp and can
        slice apart drifting ice.
      </div>
      <div className="pdex-text-600">ABILITIES</div>
      <div className="container-order">
        <div className="pdex-container">Torrent</div>
        <div className="pdex-container">Defiant</div>
      </div>
      <div className="container-order">
        <div className="pdex-text-600">HEIGHT</div>
        <div className="pdex-text-600">WEIGHT</div>
      </div>
      <div className="container-order">
        <div className="pdex-container-alt">1.7m</div>
        <div className="pdex-container-alt">84.5Kg</div>
      </div>
      <div className="container-order">
        <div className="pdex-text-600">WEAKNESESS</div>
        <div className="pdex-text-600">BASE EXP</div>
      </div>
      <div className="container-order">
        <div className="pdex-container-alt">2x 3 2 1</div>
        <div className="pdex-container-alt">239</div>
      </div>
      <div className="pdex-text-600">STATS</div>
      <div className="container-order">
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "red" }}
          >
            HP
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "orange" }}
          >
            ATK
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "#FAD53A" }}
          >
            DEF
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "cyan" }}
          >
            SpA
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "lightgreen" }}
          >
            SpD
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun">
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "hotpink" }}
          >
            SPD
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
        <div className="harun" style={{ backgroundColor: "#89B3FF" }}>
          <div
            className="pdex-container-alt-bar"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            TOT
          </div>
          <div style={{ marginTop: 8, fontWeight: "bold" }}>630</div>
        </div>
      </div>
      <div className="pdex-text-600">EVOLUTION</div>
      <div className="container-order">
        <div>Lvl 16</div>
        <div>Lvl 36</div>
      </div>
      <div className="container-order">
        <div>Before</div>
        <div>After</div>
      </div>
    </div>
  );
}

export default PokeIndex;
