import { apiUrl } from "../utils/consts";

export const getSeeds = async () => {
  const response = await fetch(`${apiUrl}/plantas`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': "69420",
      "Access-Control-Allow-Origin": "*"
    },
  });
  return response.json();
}