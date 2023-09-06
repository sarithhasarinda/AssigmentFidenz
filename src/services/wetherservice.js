import axios from 'axios';

const API_KEY = '256ba9bbcef8f699356a8c927147a738';

const WeatherService = {
  getWeatherByCityCode: async (cityCode) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
};

export default WeatherService;
