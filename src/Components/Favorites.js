import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

function Favorites() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://capstone-api-eta.vercel.app/api/capstone/specific")
      .then((res) => res.json())
      .then((data) => setResponse(data));
  });
  // useEffect(() => {
  //   console.log("Here is the Response State", response)
  // },  [response])
  return (
    <div className="FaveMainContainer">
      <h1 className="FavoritesH1">Favorite Restaurants!</h1>
      <div className="Favorites">
        {response.map((element, index) => (
          <Card key={index} style={{ width: "70%"}}>
            <CardContent className="Card" style={{ border: "none", width: "70%" }}>
              <div className="FaveIcon">
                <IconButton
                  sx={{ fontSize: "180px" }}
                  style={{ backgroundColor: "white", color: "#750448" }}
                >
                  <FavoriteIcon />
                </IconButton>
                
              </div>
              
              <div className="OtherFaveInfo" >
              <Typography variant="h5" sx={{ fontSize: "40px"}}component="div">
                  {element.title}
                </Typography>
                <Typography sx={{ fontSize: "20px" }} color="text.secondary">
                  <a href={element.map_url}>Directions to Restaurant</a>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  {element.rating}" out of 5 stars!"
                </Typography>
              </div>
              {/*       
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
