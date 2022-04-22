import { useState, useEffect } from "react";
import GamesApi from "../Services/gamesService";

const useGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    GamesApi.getAllGames().then((res) => {
      setGames(res);
    });
  }, []);

  return games;
};

export default useGames;
