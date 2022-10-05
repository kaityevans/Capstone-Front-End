import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Restaurant from "./Restaurant";

export default function Restaurants() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("https://capstone-api-eta.vercel.app/api/capstone")
      .then((res) => res.json())
      .then((data) => setResponse(data));
  });

  return (
    <div className="RestaurantDisplay">
      {/* <Search /> */}
      {response.map((element, index) => (
        <Card sx={{ maxWidth: 445 }} className="CardContainer">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Restaurant">
                {element.rating}/5
              </Avatar>
            }
            title={element.title}
            subheader={element.address}
          />
          <CardMedia
            component="img"
            height="194"
            image={element.dish_image}
            alt="Image from Restaurant"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Vegetarian Options:
            </Typography>
            <Typography paragraph>{element.dishes}</Typography>
            <a href={element.map_url}>Directions to Restaurant</a>
          </CardContent>
          <Restaurant />
        </Card>
      ))}
      ;
    </div>
  );
}
