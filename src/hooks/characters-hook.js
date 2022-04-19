import { useState, useEffect } from "react";
import CharactersService from "../Services/charactersService";

const useCharacters = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    CharactersService.getAllCharacters().then((res) => {
      setCharacters(res);
    });
  }, []);

  return characters;
};

export default useCharacters;
