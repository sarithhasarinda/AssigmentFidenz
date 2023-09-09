import axios from "axios";
import { WEATHER_API_BASE_URL } from "../config/constant";

const API_KEY =process.env.REACT_APP_API_KEY

const WeatherService = {
  getWeatherByCityCode: async (cityCode) => {
    try {
      const response = await axios.get(
        `${WEATHER_API_BASE_URL}/group?id=${cityCode}&units=metric&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

export default WeatherService;
