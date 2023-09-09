import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as React from "react";
import "../assets/styles/weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import clo from "../assets/images/cloud.png";
import { Container } from "react-bootstrap";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

export const Weather = (props) => {
  const {
    city,
    temp,
    date,
    desc,
    pressure,
    humidity,
    visibility,
    temp_min,
    temp_max,
    windspeed,
    degree,
    sunrise,
    sunset,
    bgclr,
  } = props;
  return (
    <div style={{ marginTop: "50px", marginLeft: "20px" }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          style={{ backgroundColor: bgclr, height: "250px" }}
          sx={{ height: 200 }}
          image={clo}
          title="green iguana"
        >
          <Container
            fluid
            style={{ padding: "10px", color: "white", fontFamily: "inter" }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col>
                <p style={{ fontSize: "24px" }}>
                  <b>{city} </b>
                </p>
                <p>{date}</p>
              </Col>
              <Col>
                <p style={{ fontSize: "50px" }}>
                  {" "}
                  <b>{temp}&deg;C </b>
                </p>
              </Col>
            </Row>
            <Row style={{ padding: "20px" }}>
              <Col style={{ padding: "20px 0px" }}>
                <p>
                  {" "}
                  <CloudQueueOutlinedIcon /> <b> {desc} </b>{" "}
                </p>
              </Col>
              <Col>
                <p>
                  <b>Temp min : {temp_min}&deg;C</b>
                </p>
                <p>
                  {" "}
                  <b>Temp max : {temp_max}&deg;C</b>
                </p>
              </Col>
            </Row>
          </Container>
        </CardMedia>

        <CardContent
          style={{
            color: "white",
            backgroundColor: "#2D2D2D",
            fontFamily: "inter",
          }}
        >
          <Row>
            <Col>
              <p>
                <b>Presure: </b> {pressure} hpa
              </p>
              <p>
                <b>Humidity:</b> {humidity} %
              </p>
              <p>
                <b>Visibility:</b> {visibility} km
              </p>
            </Col>
            <hr style={{ width: "10px", height: "100px" }}></hr>
            <Col style={{ padding: "12px" }}>
              <center>
                <NearMeOutlinedIcon />
              </center>
              <center>
                <p>
                  {windspeed} m/s {degree} degree
                </p>
              </center>
            </Col>

            <Col>
              <p>
                <b>Sunrise:</b> {sunrise}
              </p>
              <p>
                <b>Sunset:</b> {sunset}
              </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
    </div>
  );
};
