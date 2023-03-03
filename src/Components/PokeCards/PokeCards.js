import React from "react";
import "./PokeCards.css";
import turtwig from "../../assets/turtwig.gif";
import grotle from "../../assets/grotle.gif";
import torterra from "../../assets/torterrab.gif";
import chimchar from "../../assets/chimchar.gif";
import monferno from "../../assets/monferno.gif";
import infernape from "../../assets/infernape.gif";

function PokeCards(props) {
  return (
    <div className="card-place">
      <div className="poke-cards">
        <img className="gif" src={turtwig} alt="turtwig" />
        <div className="num-poke">N°387</div>
        <div className="title-pokecards">Turtwig</div>
        <div className="attribute" style={{ backgroundColor: "lightgreen" }}>
          GRASS
        </div>
      </div>
      <div className="poke-cards">
        <img
          className="gif"
          src={grotle}
          alt="grotle"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="num-poke">N°388</div>
        <div className="title-pokecards">Grotle</div>
        <div className="attribute" style={{ backgroundColor: "lightgreen" }}>
          GRASS
        </div>
      </div>
      <div className="poke-cards">
        <img className="gif" src={torterra} alt="torterra" />
        <div className="num-poke">N°389</div>
        <div className="title-pokecards">Torterra</div>
        <div className="container-order" style={{ justifyContent: "center" }}>
          <div className="attribute" style={{ backgroundColor: "lightgreen" }}>
            GRASS
          </div>
          <div className="attribute" style={{ backgroundColor: "sandybrown" }}>
            GROUND
          </div>
        </div>
      </div>
      <div className="poke-cards">
        <img className="gif" src={chimchar} alt="chimchar" />
        <div className="num-poke">N°390</div>
        <div className="title-pokecards">Chimchar</div>
        <div className="container-order" style={{ justifyContent: "center" }}>
          <div className="attribute" style={{ backgroundColor: "orange" }}>
            FIRE
          </div>
        </div>
      </div>
      <div className="poke-cards">
        <img className="gif" src={monferno} alt="monferno" />
        <div className="num-poke">N°391</div>
        <div className="title-pokecards">Monferno</div>
        <div className="container-order" style={{ justifyContent: "center" }}>
          <div className="attribute" style={{ backgroundColor: "orange" }}>
            FIRE
          </div>
          <div className="attribute" style={{ backgroundColor: "red" }}>
            FIGHTING
          </div>
        </div>
      </div>
      <div className="poke-cards">
        <img className="gif" src={infernape} alt="infernape" />
        <div className="num-poke">N°392</div>
        <div className="title-pokecards">Infernape</div>
          <div className="container-order" style={{ justifyContent: "center" }}>
              <div className="attribute" style={{ backgroundColor: "orange" }}>
                  FIRE
              </div>
              <div className="attribute" style={{ backgroundColor: "red" }}>
                  FIGHTING
              </div>
          </div>
      </div>
      <div className="poke-cards">asdasdas</div>
      <div className="poke-cards">asdasdas</div>
      <div className="poke-cards">asdasdas</div>
      <div className="poke-cards">asdasdas</div>
      <div className="poke-cards">asdasdas</div>
      <div className="poke-cards">asdasdas</div>
    </div>
  );
}

export default PokeCards;
