import { Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Typography variant="h4" align="center" mb={3}>
        404
      </Typography>
      <Typography variant="h5" align="center">
        Oops! The page you're looking for does not exist.
      </Typography>
    </div>
  );
};

export default NotFound;
