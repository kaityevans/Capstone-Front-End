import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Restaurant from "./Restaurant";
import "./Search.css"

export default function Restaurants() {
  const [response, setResponse] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    fetch("https://capstone-api-eta.vercel.app/api/capstone")
      .then((res) => res.json())
      .then((data) => setResponse(data));
  });

  useEffect(() => {
    console.log(searchTerm, "SEARCHTERM HERE")
    inputSearch();
  }, [searchTerm])

  useEffect(() => {
    console.log(filteredList, "FilteredList HERE")

  }, [filteredList])

  function inputSearch() {
    console.log(response, "Here is the Response")
    const data = response;
    const results = [];

    for (let i=0; i < data.length; i++) {
      const title = data[i].title.toLowerCase().includes(searchTerm)
      if (title) {
        results.push(data[i])
      }
      console.log("RESULTS", results);
      setFilteredList(results);
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  return (
    <div className="searchInputs">
      <input
        type="text"
        placeholder="Search..."
        onChange= {handleChange}
      />
        {filteredList.length === 0 ?(
          response.map((element, index) => (
          <div className="RestaurantDisplay">
          <Card sx={{ maxWidth: 445 }} className="CardContainer" key={index}>
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
        </div>
        )))
        :(filteredList.map((element, index) => (
          <div className="RestaurantDisplay">
            <Card sx={{ maxWidth: 445 }} className="CardContainer" key={index}>
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
          </div>
        ))
        )}
      ;{/*  */}
    </div>
  );
}
