const envs = import.meta.env;

export default {
  apiKey: envs.VITE_MARVEL_API_KEY,
  baseApiUrl: envs.VITE_MARVEL_BASE_API_URL,
  apiTs: envs.VITE_MARVEL_API_TS,
  apiHash: envs.VITE_MARVEL_API_HASH,
  apiCors: envs.VITE_CORS_STRING
};
