import React, { Fragment, useEffect, useState } from "react";
// import Theoneapi from "../../Services/theoneapi";
import CharactersInfo from "./CharactersInfo";
import Pagination from "../Pagination/Pagination";
import MockChar from "../../mock-datas/mock-characters.json";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [valueSubmit, setValueSubmit] = useState("");

  //for pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementPerPage] = useState(30);

  useEffect(() => {
    setLoading(true);
    /*
        Theoneapi.getAllLOTRCharacters()
        .then(data => {
            setCharacters(data.docs)
        })*/
    setCharacters(
      MockChar.filter((character) =>
        character.firstname
          .toLocaleLowerCase()
          .includes(valueSubmit.toLocaleLowerCase())
      )
    );
    setLoading(false);
  }, [valueSubmit]);

  if (loading) return <h2>loading...</h2>;

  //pagination
  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;
  const currentElement = characters.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchCharacter = (e) => {
    setValueSubmit(e.target.value);
  };

  return (
    <Fragment>
      <h1>My characters</h1>
      <Pagination
        elementPerPage={elementPerPage}
        totalElement={characters.length}
        paginate={paginate}
      />

      <form>
        <input
          type="text"
          style={{ width: "22%" }}
          name="searchCharacter"
          id="searchCharacter"
          onChange={handleSearchCharacter}
          placeholder="Search a character by his firstname"
        />
      </form>

      <div className="characterListSmartphone">
        {currentElement.length !== 0 ? (
          currentElement.map((char) => {
            return <CharactersInfo key={char.id} character={char} />;
          })
        ) : (
          <p>No character found</p>
        )}
      </div>
    </Fragment>
  );
};

export default Characters;
