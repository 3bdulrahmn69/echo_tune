import axios from 'axios';

async function get_tracks() {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/recommendations/',
    params: {
      limit: '20',
      seed_tracks: '0c6xIDDpzE81m2q797ordA',
      seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
      seed_genres: 'classical,country',
    },
    headers: {
      'x-rapidapi-key': 'be87e1d3c8msh37e371c55379b29p104e69jsndb316634644e',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.tracks;
  } catch (error) {
    console.error(error);
  }
}

export default get_tracks;
