const url = "http://localhost:3000/api/v1/characters";
class CharactersService {
  static async getAllCharacters() {
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

  static async getOneCharacter(id) {
    try {
      const res = await fetch(url + "/" + id, {
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
}

export default CharactersService;
