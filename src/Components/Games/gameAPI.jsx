import React, { Fragment } from "react";
//import useGames from "../../hooks/games-hook";
import useCharacters from "../../hooks/characters-hook";

const GameApi = () => {
  // const games = useGames();
  const characters = useCharacters();
  return (
    <Fragment>
      {characters !== undefined &&
        characters.map((character) => (
          <p key={character.id}>{character.firstname}</p>
        ))}
    </Fragment>
  );
};

export default GameApi;
