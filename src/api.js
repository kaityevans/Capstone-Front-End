// import queryString from 'query-string';
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

function Get(path, queryParams) {
  const [yelpInfo, setYelpInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/capstone")
      .then((res) => res.json())
      .then((data) => setYelpInfo(data));
  });
  <div className="YelpInformation">
    {yelpInfo.map((element, index) => (
      <Card key={index}>
        <CardContent className="YelpCard">
          <Typography variant="h5" component="div">
            "Title:"{element.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            "Address:"{element.location}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </div>;
}
export default Get;
