const rootEndpoint = "http://ws.audioscrobbler.com/2.0";

// Model class for a song
export class Song {
  constructor(id, name, artist, image) {
    this.id = id;
    this.name = name;
    this.artist=artist;
    this.image = image;
  }
}

class SongService {
  async searchSongsByName(name) {
    const songs = await this.fetchFromApi(
      `${rootEndpoint}/?method=track.search&track=${name}&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
    );
    songs=songs.results.track;
    return this.createSongs(songs);
  }

  async searchSongsByArtist(name) {

    const songs = await this.fetchFromApi(
      `${rootEndpoint}/?method=artist.gettoptracks&artist=${name.trim()}&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
    );
    return this.createSongs(songs);
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
  createSong(song) {
    return new Song(
      song.idsong,
      song.namesong,
      song.artistsong,
      song.imagesong
    );
  }

  // Create a song model object list from the array returned by last.fm
  createSongs(songs) {
    // Create a song object for each element in the array
    return songs.map((song) => this.createCocktail(song));
  }
}

export default new SongService();