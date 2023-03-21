const rootEndpoint = "http://ws.audioscrobbler.com/2.0";

// Model class for a song
export class Song {
  constructor(id, name, image, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.thumbnail = image + "/preview";
    this.instructions = instructions;
  }
}

class SongService {
  async searchCSongsByName(name) {
    const songs = await this.fetchFromApi(
      `${rootEndpoint}/?method=track.search&track=${name.trim()}&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
    );
    return this.createSongs(songs);
  }

  async searchSongsByArtist(name) {

    const songs = await this.fetchFromApi(
      `${rootEndpoint}/?method=artist.gettoptracks&artist=${name.trim()}&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
    );
    return this.createCocktails(songs);
  }

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

  // Create a Cocktail model object from a subset of data fields returned by API
  createCocktail(song) {
    return new Song(
      drink.idDrink,
      drink.strDrink,
      drink.strDrinkThumb,
      drink.strInstructions
    );
  }

  // Create a Cocktail model object list from the array returned by API
  createCocktails(songs) {
    // Create a cocktail object for each element in the array
    return songs.map((song) => this.createCocktail(song));
  }
}

export default new SongService();