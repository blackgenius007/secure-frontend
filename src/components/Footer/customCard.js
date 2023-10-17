import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CustomCard = ({ icon, title, value }) => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardContent>
        {icon}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
