import React, { Fragment } from "react";
// import GamesList from "../../mock-datas/mock-games.json";
import Game from "./GameInfo";
import "./game.css";
import useGames from "../../hooks/games-hook";
import { Link } from "react-router-dom";

const Games = () => {
  // const [games, setGames] = useState([]);

  const gamesAPI = useGames();

  /*
  useEffect(() => {
    setGames(GamesList);
  }, []);
*/
  return (
    <Fragment>
      <Link to="/creategame">Create a game</Link>
      <div className="gameInfoContainer">
        {gamesAPI !== undefined &&
          gamesAPI.map((game) => {
            return <Game key={game.id} game={game} />;
          })}
      </div>
    </Fragment>
  );
};

export default Games;
