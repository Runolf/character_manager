import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
//import MockChar from "../../mock-datas/mock-characters.json";
import useCharacter from "../../hooks/onecharacter-hook";
import "./charachterDetails.css";
import CharactersService from "../../Services/charactersService";

const CharacterDetails = () => {
  let { idCharacter } = useParams();

  //let char = MockChar.filter((char) => char.id === parseInt(idCharacter));
  let char = useCharacter(idCharacter);

  const handleDelete = () => {
    CharactersService.deleteCharacter(char);
    window.location = "/characters";
  };

  return (
    <Fragment>
      <a href={`/updatecharacter/${idCharacter}`}>update character</a>
      <button onClick={handleDelete}>Delete this character</button>
      {char !== undefined && (
        <div className="characterDetailsContainer">
          <h2>
            {char.firstname} {char.lastname}
          </h2>

          <h4>{char.job}</h4>
          <p>Played by : {char.player}</p>
          <p>{char.race}</p>
          <p>{char.gender}</p>
          <p>{char.age} year </p>
          <p>{char.origin}</p>
          <p className="background">{char.background}</p>
        </div>
      )}
    </Fragment>
  );
};

export default CharacterDetails;
