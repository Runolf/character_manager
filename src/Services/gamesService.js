const url = "http://localhost:3000/api/v1/";
class GamesService {
  static async getAllGames() {
    try {
      const res = await fetch(url + "games", {
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
      const res = await fetch(url + "games/" + id, {
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

  static createGame(data) {
    //  "X-CSRF-Token": token,
    console.log(data);
    fetch(url + "games", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default GamesService;