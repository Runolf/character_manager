import urls from "./urls";

const url = urls.url() + "characters";

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

  static async createCharacter(data) {
    console.log(data);
    fetch(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async updateCharacter(data) {
    fetch(url + "/" + data.id, {
      method: "update",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async deleteCharacter(data) {
    fetch(url + "/" + data.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default CharactersService;
