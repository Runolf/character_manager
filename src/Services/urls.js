const isProd = false;

class Urls {
  static url() {
    return isProd
      ? "https://rp-character-manager-api.herokuapp.com/api/v1/"
      : "http://localhost:3000/api/v1/";
  }
}

export default Urls;
