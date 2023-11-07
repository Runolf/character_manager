import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import CharacterDetails from "./Components/Characters/CharacterDetails";
import Homepage from "./Components/Pages/homepage";
import NotFound from "./Components/Pages/notFound";
import GameDetails from "./Components/Games/GameDetails";
import GameApi from "./Components/Games/gameAPI";
import CreateGame from "./Components/Pages/CreateGame";
import CreateCharacter from "./Components/Characters/CreateCharacter";
import UpdateCharacter from "./Components/Characters/updateCharacter";
import CreateAccount from "./Components/Pages/CreateAccount";

const style = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Routeur = () => {
  const deconnect = () => {
    sessionStorage.removeItem("isGoodUser");
    window.location.reload();
  };

  return (
    <Fragment>
      <BrowserRouter>
        <nav className="nav-router">
          <Link to="/" style={style}>
            home
          </Link>{" "}
          {sessionStorage.getItem("isGoodUser") === "true" && (
            <Fragment>
              <Link to="/characters" style={style}>
                myCharacters
              </Link>
              <input value="deconnect" type="button" onClick={deconnect} />
            </Fragment>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create_account" element={<CreateAccount/>} />

          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/:idCharacter"
            element={<CharacterDetails />}
          />
          <Route path="/createcharacter" element={<CreateCharacter />} />
          <Route
            path="/updatecharacter/:idCharacter"
            element={<UpdateCharacter />}
          />
          <Route path="/game/:idGame" element={<GameDetails />} />

          <Route path="/gameapi" element={<GameApi />} />
          <Route path="/creategame" element={<CreateGame />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routeur;
