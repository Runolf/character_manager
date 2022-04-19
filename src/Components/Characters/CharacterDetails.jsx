import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
//import MockChar from "../../mock-datas/mock-characters.json";
import useCharacter from "../../hooks/onecharacter-hook";

const CharacterDetails = () => {
  let { idCharacter } = useParams();

  //let char = MockChar.filter((char) => char.id === parseInt(idCharacter));
  let char = useCharacter(idCharacter);

  return (
    <Fragment>
      {char !== undefined && (
        <div>
          <h3>
            {char.firstname} {char.lastname}
          </h3>

          <h4>{char.job}</h4>
          <p>Played by : {char.player}</p>
          <p>{char.race}</p>
          <p>{char.gender}</p>
          <p>{char.age} year </p>
          <p>{char.origin}</p>
        </div>
      )}
    </Fragment>
  );
};

export default CharacterDetails;
