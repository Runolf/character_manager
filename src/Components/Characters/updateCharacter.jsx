import React, { useState, Fragment } from "react";
import CharactersService from "../../Services/charactersService";
import { useParams } from "react-router-dom";
import useGames from "../../hooks/games-hook";
import useCharacter from "../../hooks/onecharacter-hook";

const UpdateCharacter = () => {
  let { idCharacter } = useParams();
  const games = useGames();
  let char = useCharacter(idCharacter);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [gender, setGender] = useState();
  const [player, setPlayer] = useState();
  const [race, setRace] = useState();
  const [background, setBackground] = useState();
  const [job, setJob] = useState();
  const [origin, setOrigin] = useState();
  const [age, setAge] = useState();
  const [game, setGame] = useState();

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handlePlayer = (e) => {
    setPlayer(e.target.value);
  };

  const handleBackground = (e) => {
    setBackground(e.target.value);
  };

  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const handleRace = (e) => {
    setRace(e.target.value);
  };

  const handleOrigin = (e) => {
    setOrigin(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleGame = (e) => {
    setGame(e.target.value);
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    let datas = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      age: age,
      game_id: game,
      origin: origin,
      race: race,
      job: job,
      player: player,
      background: background,
    };
    //console.log(datas);
    CharactersService.UpdateCharacter(datas);
  };

  return (
    <Fragment>
      <br />
      <br />
      {char !== undefined && (
        <form>
          <input
            type="text"
            placeholder={char.firstname}
            onChange={handleFirstname}
          />
          <br />
          <input
            type="text"
            placeholder={char.lastname}
            onChange={handleLastname}
          />
          <br />
          <input
            type="text"
            placeholder={char.gender}
            onChange={handleGender}
          />
          <br />
          <input
            type="text"
            placeholder={char.player}
            onChange={handlePlayer}
          />
          <br />
          <input type="text" placeholder={char.race} onChange={handleRace} />
          <br />
          <input type="text" placeholder={char.job} onChange={handleJob} />
          <br />
          <input
            type="text"
            placeholder={char.origin}
            onChange={handleOrigin}
          />
          <br />
          <input type="number" placeholder={char.age} onChange={handleAge} />
          <br />

          <textarea placeholder={char.background} onChange={handleBackground} />
          <br />
          <select onChange={handleGame}>
            <option>Choose a game</option>
            {games !== undefined &&
              games.map((game) => (
                <option selected={char.game_id} value={game.id} key={game.id}>
                  {game.title}
                </option>
              ))}
          </select>
          <br />
          <br />

          <input type="button" value="Submit" onClick={submitHanlder} />
        </form>
      )}
    </Fragment>
  );
};

export default UpdateCharacter;
