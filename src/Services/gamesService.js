import Urls from "./urls";

const url = Urls.url() + "games";

class GamesService {
  static async getAllGames() {
    try {
      const res = await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

  static async getOneGames(id) {
    try {
      const res = await fetch(url + "/" + id, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.json();
    } catch (error) {
      console.log(error.message);
    }
  }

  static createGame(data) {
    //  "X-CSRF-Token": token,
    console.log(data);
    fetch(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async updateGame(data) {
    await fetch(url + "/" + data.id, {
      method: "update",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static deleteGame(data) {
    fetch(url + "/" + data.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default GamesService;
