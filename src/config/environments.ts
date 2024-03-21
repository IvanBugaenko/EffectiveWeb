const envs = import.meta.env;

export default {
  apiKey: envs.MARVEL_API_KEY,
  baseApiUrl: envs.MARVEL_BASE_API_URL
};
