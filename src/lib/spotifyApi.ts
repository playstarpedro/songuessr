import axios from "axios";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

export async function getAccessToken() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }),
    {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data.access_token;
}

export async function searchArtist(query: string) {
  const token = await getAccessToken();

  const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: "artist",
      limit: 5,
    },
  });

  return response.data.artists.items;
}
