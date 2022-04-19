import { useState, useEffect } from "react";
import GamesApi from "../Services/gamesService";

const useGame = (id) => {
  const [game, setGame] = useState();

  useEffect(() => {
    GamesApi.getOneGames(id).then((res) => {
      setGame(res);
    });
  }, []);

  return game;
};

export default useGame;
