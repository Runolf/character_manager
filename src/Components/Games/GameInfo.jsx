import React, { Fragment } from "react";
import "./game.css";

const Game = (props) => {
  const game = props.game;

  return (
    <Fragment>
      <div className="gameInfo">
        <a href={`/game/${game.id}`}>Link to details</a>
        <h2>{game.title}</h2>
        <p>{game.genre}</p>
      </div>
    </Fragment>
  );
};

export default Game;
