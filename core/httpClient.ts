import axios from "axios";

const TOKEN = "d6b8880969f549ff6b930c59c56dc511";

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TOKEN,
  },
});

export default httpClient;
