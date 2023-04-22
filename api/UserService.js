const rootEndpoint = "http://ws.audioscrobbler.com/2.0";
const apiKey = "83920c6715670d2cf5294347ca609ba1";
const user = "All_bi_mys3lf";

class UserService {
  async getFavoriteArtist() {
    const artist = await this.fetch(
      `${rootEndpoint}/?method=user.gettopartists&user=${user}&api_key=${apiKey}&format=json`,{method: "GET",}
    ).catch((error) => {console.error(error);});;
    return artist.topartists.track[0].name;
  }

  getTopArtist = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.gettopartists&user=${user}&api_key=${apiKey}&format=json`,{method: "GET",}
    );
    const data = await response.json();
    // Access the object artist
    return data.topartists.artist[0].name;
  };

  async fetchFromApi(query) {
    console.log(`Fetching API with query ${query}`);
    try {
      const response = await fetch(query);
      // FIXME: JSON parse error when ingredient is not found
      const content = await response.json();
      return content.songs;
    } catch (e) {
      console.error(e);
    }
  }

}

export default new UserService();