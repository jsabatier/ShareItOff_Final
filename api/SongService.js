const rootEndpoint = "http://ws.audioscrobbler.com/2.0";
const apiKey = "83920c6715670d2cf5294347ca609ba1";
const user = "All_bi_mys3lf";

class SongService {
  async searchSongsByName(name) {
    const songs = await fetch(
      `${rootEndpoint}/?method=track.search&track=${name}&api_key=${apiKey}&format=json`
    );
    return songs.results.track;
  }

  async searchSongsByArtist(name) {
    const songs = await fetch(
      `${rootEndpoint}/?method=artist.search&artist=${name}&api_key=${apiKey}&format=json`
    );
    return songs.artist.name;
  }
}

export default new SongService();
