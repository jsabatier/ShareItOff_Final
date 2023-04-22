const rootEndpoint = "http://ws.audioscrobbler.com/2.0";
const apiKey = "83920c6715670d2cf5294347ca609ba1";
const user = "All_bi_mys3lf";

class HomeService {
  getFriends = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getfriends&user=${username}&api_key=${apiKey}&format=json`,
      { method: "GET" }
    );
    const data = await response.json();
    // Access the object artist
    return data.friends.user;
  };

  getFriendsRecent = async (friend) => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getrecenttracks&user=${friend}&api_key=${apiKey}&format=json`,
      { method: "GET" }
    );
    const data = await response.json();
    // Access the object artist
    return data.recenttracks.track[0];
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

export default new HomeService();
