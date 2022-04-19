import React, { Fragment } from "react";
import MockGames from "../../mock-datas/mock-games.json";
import MockChar from "../../mock-datas/mock-characters.json";
import { useParams } from "react-router-dom";
import CharacterDetails from "../Characters/CharacterDetails";

const GameDetails = () => {
  const { idGame } = useParams();
  let gameObj = MockGames.filter((game) => game.id === parseInt(idGame))[0];

  let charGame = MockChar.filter((char) => char.game === parseInt(idGame));

  return (
    <Fragment>
      <h1>{gameObj.name}</h1>
      <h3>{gameObj.type}</h3>

      <h2>Characters</h2>
      {charGame.map((char) => (
        <CharacterDetails key={char.id} char={char} />
      ))}
    </Fragment>
  );
};

export default GameDetails;
