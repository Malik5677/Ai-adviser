import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const client = axios.create({ baseURL: API_URL, timeout: 20000 });

export async function fetchMeta() {
  const { data } = await client.get("/api/meta");
  return data;
}

export async function getRecommendation(answers) {
  const { data } = await client.post("/api/recommend", answers);
  return data;
}

export default client;
