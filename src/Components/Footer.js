import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { checkAuth, deleteCookie } from "../routes";
// import Button from "@mui/material/Button";

export default function Footer({ title = "Thanks for Visiting!" }) {
  return (
    <div className="Footer">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="success" position="sticky">
          <Toolbar style={{ backgroundColor: "green" }}>
            <Typography
              align="left"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            <ul className="Footer-Links">
              <li>
                {/* Contact Us */}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    paddingLeft: "20%",
                    paddingRight: "20%",
                    display: "inline-block",
                  }}
                  to="/Contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
