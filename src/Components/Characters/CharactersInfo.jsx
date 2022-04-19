import React, { Fragment } from "react";
import "./charactersInfo.css";
import useGame from "../../hooks/onegame-hook";
//import GameData from "../../mock-datas/mock-games.json";

const CharactersInfo = (props) => {
  const character = props.character;
  const game = useGame(character.game_id);

  //const game = GameData.find((game) => game.id === character.game);

  return (
    <Fragment>
      <div className="charactersInfoCard">
        <h2>{character.firstname + " " + character.lastname} </h2>
        <h4>{character.job}</h4>
        <p>{game !== undefined && game.title}</p>
        <a href={`/characters/${character.id}`}>See details</a>
      </div>
    </Fragment>
  );
};

export default CharactersInfo;
