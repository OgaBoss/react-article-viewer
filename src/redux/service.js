import axios from "axios";

const Service = {
  async fetchPlatforms() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/sources?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`)
  },
  
  async fetchPlatformNews(source) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`)
  }
};

export default Service;
