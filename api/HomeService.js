const rootEndpoint = "http://ws.audioscrobbler.com/2.0";
const apiKey = "83920c6715670d2cf5294347ca609ba1";
const user = "All_bi_mys3lf";

class HomeService {

    fetchFriendsRecentTracks = async () => {
        const url = `http://ws.audioscrobbler.com/2.0/?method=user.getfriends&user=${user}&api_key=${apiKey}&format=json&limit=10`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          const friends = data.friends.user;
  
          const recentTracksPromises = friends.map(async (friend) => {
            const recentTrackUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${friend}&api_key=${apiKey}&format=json&limit=1`;
            const recentTrackResponse = await fetch(recentTrackUrl);
            const recentTrackData = await recentTrackResponse.json();
            return recentTrackData.recenttracks.track;
          });
  
          const recentTracks = await Promise.all(recentTracksPromises);
          
        } catch (error) {
          console.error(error);
        }
        return recentTracks;
      };

  getFriends = async () => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getfriends&user=${user}&api_key=${apiKey}&format=json`,
      { method: "GET" }
    );
    const data = await response.json();
    // Access the object artist
    return data.friends.user;
  };

  getFriendsRecent = async (friends) => {
    const response = await fetch(
      `${rootEndpoint}/?method=user.getrecenttracks&user=${friends.user[0].name}&api_key=${apiKey}&format=json`,
      { method: "GET" }
    );
    const data = await response.json();
    // Access the object artist
    return data.recenttracks.track;
  };

}

export default new HomeService();
