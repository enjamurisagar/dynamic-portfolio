import { Box } from "@mui/material";
import React from "react";

type FlexType = {
  children: React.ReactNode;
  sx?: Object;
};

const FlexCenter = ({ children, sx }: FlexType) => {
  return (
    <Box display="flex" justifyContent="center" sx={sx}>
      {children}
    </Box>
  );
};

export default FlexCenter;
