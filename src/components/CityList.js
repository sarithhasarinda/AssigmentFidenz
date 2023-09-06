import React, { useState, useEffect } from "react";
import WeatherService from "../services/wetherservice";
import cityData from "../data/cities.json";
import { Weather } from "./Weather";
import "./MainWeather.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Headerbg from "./Headerbg.png";
import { Col, Container, Row } from "react-bootstrap";

const CityList = () => {
  const [weatherData, setWeatherData] = useState([]);
  async function fetchWeatherData() {
    const cityCodes = cityData.List;
    console.log(cityCodes);
    const dataPromises = cityCodes.map((cityArray) =>
      WeatherService.getWeatherByCityCode(cityArray.CityCode)
    );

    try {
      const weatherResults = await Promise.all(dataPromises);
      setWeatherData(weatherResults);
      console.log(weatherResults);
    } catch (error) {
      // Handle the error
    }
  }
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Inter",
        color: "white",
        backgroundImage: `url(${Headerbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{}}>
        <p style={{ fontSize: "20px", position: "relative", top: "30px" }}>
          {" "}
          <b>
            {" "}
            <center>
              {" "}
              <WbSunnyIcon /> Weather App
            </center>
          </b>
        </p>
      <Container>
          <Row>
          <Col lg={12} sm={12}>
              {weatherData.map((city) => (
                <Weather
                  city={city.list[0].name}
                  temp={city.list[0].main.temp}
                  date={new Date(city.list[0].dt * 1000).toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit", hour12: true }
                  )}
                  desc={city.list[0].weather[0].description}
                  pressure={city.list[0].main.pressure}
                  humidity={city.list[0].main.humidity}
                  visibility={city.list[0].visibility / 1000}
                  temp_min={city.list[0].main.temp_min}
                  temp_max={city.list[0].main.temp_max}
                  windspeed={city.list[0].wind.speed}
                  degree={city.list[0].wind.deg}
                  sunrise={new Date(
                    city.list[0].sys.sunrise * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                  sunset={new Date(
                    city.list[0].sys.sunset * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                />
                //city,temp,date,desc,pressure,humidity,visibility,temp_min,temp_max,windspeed,degree,sunrise,sunset
              ))}
            </Col>
           
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CityList;
