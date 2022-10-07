import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { checkAuth, deleteCookie } from "../routes";
import Button from "@mui/material/Button";

export default function Header({ title = "Veg-a-Menu" }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" position="sticky">
        <Toolbar style={{ backgroundColor: "#8bc34a", border: "50px green" }}>
          <Typography
            align="left"
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ paddingLeft: "5%"}}
          >
            {title}
          </Typography>
          <ul className="Header-Links">
            <li>
              {/* Search */}
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
               Search
              </Link>
            </li>
            {
              checkAuth() &&
              <li>
                {/* Favorites */}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Favorites"
                >
                  Favorites
                </Link>
              </li>
            }
            <li>
              {/* Search */}
              <Link style={{ textDecoration: "none", color: "white" }} to="/Login">
               Login
              </Link>
            </li>
            <li>
              {checkAuth() && 
              <Button
              style={{ color: "white", width: "5%"}}
              onClick={deleteCookie}
              >
                Logout
              </Button>
            }
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
