import React from "react";
import { Box, Typography, Button } from "@mui/material";



const Card = (props) => {
  const { item } = props;
  return (
    <Box
      sx={{
        width: "300px",
        height: "450px",
        border: "1px solid",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        "& img": {
          width: "100%",
          height: "80%",
          borderRadius: "8px",
        },
      }}
    >
      <img src={item?.user_images?.[0]}></img>
      <Typography>{item?.user}</Typography>
      <Typography>{item?.stand}</Typography>
      
    </Box>
  );
};

export default Card;