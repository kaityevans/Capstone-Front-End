import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";

export default function Restaurant() {
  const [isLiked, setIsLiked] = useState(false);

  function selectButton(props) {
    setIsLiked(!isLiked);
    // setFavorite(!favorite);
  }
  return (
    <div>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={selectButton}
          style={
            isLiked
              ? { backgroundColor: "lightgrey", color: "#750448" }
              : { backgroundColor: "white" }
          }
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
        <CardContent>
        </CardContent>
      
      
    </div>
  );
}
