const rootEndpoint = "http://ws.audioscrobbler.com/2.0";
const apiKey = "83920c6715670d2cf5294347ca609ba1";
const user = "All_bi_mys3lf";

class UserService {
  getTopArtist = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.gettopartists&user=${user}&api_key=${apiKey}&format=json`,{method: "GET",}
    );
    const data = await response.json();
    // Access the object artist
    return data.topartists.artist[0];
  };

  getTopTrack = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.gettoptracks&user=${user}&api_key=${apiKey}&format=json`,{method: "GET",}
    );
    const data = await response.json();
    // Access the object artist
    return data.toptracks.track[0];
  };

  getInfo= async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getinfo&user=${user}&api_key=${apiKey}&format=json`,{method: "GET",}
    );
    const data = await response.json();
    // Access the object artist
    return data.user;
  };

  getSongs = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=10`,{method: "GET",}
    );
    const data = await response.json();
    return data.recenttracks.track;
  };

}

export default new UserService();