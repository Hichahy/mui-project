import * as React from "react";
import Box from "@mui/material/Box";
import background from "./header.jpg";
import Typography from "@mui/material/Typography";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";

export default function BoxHeader() {
  const header = "./header.jpg";

  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        display="flex"
        alignItems="center"
        style={{ fontSize: "10vw" }}
        color="white"
        component="div"
      >
        <FastfoodOutlinedIcon style={{ fontSize: "100%" }} /> FeedMe
      </Typography>
    </Box>
  );
}
