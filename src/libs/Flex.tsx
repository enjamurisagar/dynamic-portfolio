import { Box } from "@mui/material";
import React from "react";

type FlexType = {
  children: React.ReactNode;
  sx?: Object;
};

const Flex = ({ children, sx }: FlexType) => {
  return (
    <Box display="flex" sx={sx}>
      {children}
    </Box>
  );
};

export default Flex;
