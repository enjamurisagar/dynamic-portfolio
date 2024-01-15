import { Box } from "@mui/material";
import React from "react";

type FlexType = {
  children: React.ReactNode;
  sx?: Object;
};

const FlexBetween = ({ children, sx }: FlexType) => {
  return (
    <Box display="flex" justifyContent="space-between" sx={sx}>
      {children}
    </Box>
  );
};

export default FlexBetween;
