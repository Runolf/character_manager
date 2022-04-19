import { useState, useEffect } from "react";
import CharactersService from "../Services/charactersService";

const useCharacter = (id) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    CharactersService.getOneCharacter(id).then((res) => {
      setCharacter(res);
    });
  }, []);

  return character;
};

export default useCharacter;
