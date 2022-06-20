import React from "react";
import "./footer.scss";
import Box from "@mui/material/Box";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import Typography from "@mui/material/Typography";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import IcecreamOutlinedIcon from "@mui/icons-material/IcecreamOutlined";

export default function Footer() {
  return (
    <Box className="container-footer">
      <Box className="box-footer">
        <Box sx={{ marginBottom: "25px" }}>
          <Typography
            display="flex"
            alignItems="center"
            style={{ fontSize: "5vw" }}
            color="black"
            component="div"
          >
            <FastfoodOutlinedIcon style={{ fontSize: "100%" }} /> FeedMe
          </Typography>
          <Typography
            className="description-header"
            variant="body2"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            component="span"
            sx={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <PersonPinCircleOutlinedIcon sx={{ fontSize: "50px" }} /> Al. Bjroe
            cruasant France
          </Typography>
          <Typography
            component="span"
            sx={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <PhoneIphoneOutlinedIcon sx={{ fontSize: "50px" }} /> 123 123 123
          </Typography>
          <Typography
            component="span"
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "30px",
            }}
          >
            <Typography
              component="span"
              variant="h6"
              style={{ margin: "20px 0 0" }}
            >
              Social Media
            </Typography>
            <Box>
              <FacebookOutlinedIcon sx={{ fontSize: "50px" }} />
              <IcecreamOutlinedIcon sx={{ fontSize: "50px" }} />
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
