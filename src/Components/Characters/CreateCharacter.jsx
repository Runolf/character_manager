import React, { useState, Fragment } from "react";
import CharactersService from "../../Services/charactersService";
import useGames from "../../hooks/games-hook";

const CreateCharacter = () => {
  const games = useGames();

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
    CharactersService.createCharacter(datas);
  };

  return (
    <Fragment>
      <br />
      <br />

      <form>
        <input type="text" placeholder="Firstname" onChange={handleFirstname} />
        <br />
        <input type="text" placeholder="Lastname" onChange={handleLastname} />
        <br />
        <input type="text" placeholder="Gender" onChange={handleGender} />
        <br />
        <input type="text" placeholder="Player" onChange={handlePlayer} />
        <br />
        <input type="text" placeholder="Race" onChange={handleRace} />
        <br />
        <input type="text" placeholder="Job" onChange={handleJob} />
        <br />
        <input type="text" placeholder="Origin" onChange={handleOrigin} />
        <br />
        <input type="number" placeholder="Age" onChange={handleAge} />
        <br />

        <textarea
          type=""
          placeholder="enter your background here"
          onChange={handleBackground}
        />
        <br />
        <select onChange={handleGame}>
          <option>Choose a game</option>
          {games !== undefined &&
            games.map((game) => (
              <option value={game.id} key={game.id}>
                {game.title}
              </option>
            ))}
        </select>
        <br />
        <br />

        <input type="button" value="Submit" onClick={submitHanlder} />
      </form>
    </Fragment>
  );
};

export default CreateCharacter;
