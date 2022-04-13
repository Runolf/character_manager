import React, { Fragment } from "react";
import "./game.css";

const Game = (props) => {
  const game = props.game;

  return (
    <Fragment>
      <div
        className="gameInfo"
        onClick={() => {
          console.log(game.id);
        }}
      >
        <a href={`/game/${game.id}`}>Link to details</a>
        <h2>{game.name}</h2>
        <p>{game.type}</p>
      </div>
    </Fragment>
  );
};

export default Game;
