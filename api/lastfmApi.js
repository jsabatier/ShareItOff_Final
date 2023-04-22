// API endpoint
const rootEndpoint = "http://ws.audioscrobbler.com/2.0";

// fetch API for an artist
const fetchArtist = async (name) => {
  const response = await fetch(
    `${rootEndpoint}/?method=artist.getinfo&artist=${name}&api_key=83920c6715670d2cf5294347ca609ba1&format=json`
  );
  const data = await response.json();
  // Access the object artist
  return data.artist;
};

export default fetchArtist;
