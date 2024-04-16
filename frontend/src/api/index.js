import { apiUrl } from "../utils/consts";

export const getSeeds = async () => {
  const response = await fetch(`${apiUrl}/plantas`);
  return response.json();
}