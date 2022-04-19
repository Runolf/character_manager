import React, { Fragment, useState } from "react";
import GamesService from "../../Services/gamesService";

const CreateGame = () => {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [image, setImage] = useState();
  const [owner, setOwner] = useState();
  // const token = document.querySelector('meta[name="csrf-token"]').textContent;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleOwner = (e) => {
    setOwner(e.target.value);
  };
  const submitHanlder = (e) => {
    e.preventDefault();

    let datas = {
      title: title,
      genre: genre,
      image: image,
      owner: owner,
    };
    console.log(datas);
    GamesService.createGame(datas);
  };

  return (
    <Fragment>
      <br />
      <br />

      <form>
        <input type="text" placeholder="Title" onChange={handleTitle} />
        <br />
        <input type="text" placeholder="Genre" onChange={handleGenre} />
        <br />
        <input type="text" placeholder="Image" onChange={handleImage} />
        <br />
        <input type="text" placeholder="Owner" onChange={handleOwner} />
        <br />
        <br />

        <input type="button" value="Submit" onClick={submitHanlder} />
      </form>
    </Fragment>
  );
};

export default CreateGame;
