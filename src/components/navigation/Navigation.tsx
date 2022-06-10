import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";

const Navigation = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography
              display="flex"
              alignItems="center"
              variant="h6"
              color="inherit"
              component="div"
            >
              <FastfoodOutlinedIcon /> FeedMe
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
