import React, { useState, useEffect } from "react";
import WeatherService from "../services/wetherservice";
import cityData from "../data/cities.json";
import { Weather } from "../components/Weather";
import "../assets/styles/MainWeather.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Headerbg from "../assets/images/Headerbg.png";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

const CityList = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [fileteredData,setFilteredData] = useState([])
  const [inputValue,setInputValue] = useState("")
  async function fetchWeatherData() {
    const cityCodes = cityData.List;
    const dataPromises = cityCodes.map((cityArray) =>
      WeatherService.getWeatherByCityCode(cityArray.CityCode)
    );

    try {
      const weatherResults = await Promise.all(dataPromises);
      setWeatherData(weatherResults);
      setFilteredData(weatherResults)
    } catch (error) {
      // Handle the error
    }
  }
  const handleTextChange = (e)=>{
    setInputValue(e.target.value)
  }
  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    // Copy the original weatherData array
    let result = [...weatherData];
    if (inputValue) {
        // Filter the data based on whether the city name contains the input value
        result = result.filter(city => {
            const cityName = city.list[0].name.toLowerCase();
            return cityName.includes(inputValue.toLowerCase());
        });
    }
    // Update the state with the filtered data
    setFilteredData(result);
}, [inputValue]);




  const bgColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E8", "#33E8FF"];

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
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"50px"
      }}>
        <SearchBar value={inputValue} onChange={handleTextChange}/>
        </div>
      <Container>
        <Row>
          {fileteredData.map((city, index) => (
            <Col lg={6} sm={12} key={index}>
              <Weather
                city={city.list[0].name}
                temp={city.list[0].main.temp}
                date={new Date(city.list[0].dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
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
                bgclr={bgColors[index % bgColors.length]} // Assign a random color
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CityList;
