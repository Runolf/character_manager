import React, { Fragment } from "react";

const CharacterDetails = (props) => {
  let char = props.char;

  return (
    <Fragment>
      <h3>
        {char.firstname} {char.lastname}
      </h3>

      <h4>{char.job}</h4>
      <p>Played by : {char.player}</p>
      <p>{char.race}</p>
      <p>{char.gender}</p>
      <p>{char.age} year </p>
      <p>{char.from}</p>
    </Fragment>
  );
};

export default CharacterDetails;
