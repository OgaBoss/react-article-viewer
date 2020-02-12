import axios from "axios";

export const getPlatforms = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/sources?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`)
};

export const getPlatformNews = async (source) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`)
};
