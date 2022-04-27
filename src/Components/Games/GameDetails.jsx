import React, { Fragment } from "react";
//import MockGames from "../../mock-datas/mock-games.json";
//import MockChar from "../../mock-datas/mock-characters.json";
import { useParams } from "react-router-dom";
import useOneGame from "../../hooks/onegame-hook";
import CharacterDetails from "../Characters/CharacterDetails";

const GameDetails = () => {
  const { idGame } = useParams();

  //let gameObj = MockGames.filter((game) => game.id === parseInt(idGame))[0];

  //let charGame = MockChar.filter((char) => char.game === parseInt(idGame));

  //console.log(idGame);

  let gameObj = useOneGame(idGame);

  return (
    <Fragment>
      <h2>Characters</h2>

      {gameObj !== undefined && (
        <div>
          <h3>{gameObj.title}</h3>
          <p>{gameObj.genre}</p>
          {gameObj.charachters !== undefined ? (
            gameObj.charachters.map((char) => (
              <CharacterDetails key={char.id} char={char} />
            ))
          ) : (
            <p>no character found</p>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default GameDetails;
