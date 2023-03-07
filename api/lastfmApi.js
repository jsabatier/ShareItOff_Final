// API endpoint
const rootEndpoint = "http://ws.audioscrobbler.com/2.0";

// fetch API for Cher
const fetchArtist = async () => {
  const response = await fetch(
    `${rootEndpoint}/?method=artist.getinfo&artist=Cher&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
  );
  const data = await response.json();
  // Access the object artist
  return data.artist;
};

export default fetchArtist;
