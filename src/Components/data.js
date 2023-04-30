import axios from "axios";

const clientId = "lXSHb0R6fio45XaqzYkNyoHzE4SPN7mh609casoC";
const redirectUri = `${window.location.origin}/authorize`;
const apiUrl = `https://api.nasa.gov/DONKI/notifications?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&type=all`;

const authorize = () => {
  const authUrl = `https://api.nasa.gov/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=`;
  window.location.href = authUrl;
};

const getTokenFromUrl = () => {
  const fragment = window.location.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get("access_token");
};

const getNotifications = async () => {
  const token = getTokenFromUrl();
  if (!token) {
    authorize();
    return;
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
      params: { api_key: clientId },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getNotifications();
