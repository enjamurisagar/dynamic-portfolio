import { Box, Skeleton } from "@mui/material";
import React from "react";
import Helper from "../helpers";
import FlexBetween from "../libs/FlexBetween";

const ProjectSkeleton = ({ key }: { key: number }) => {
  const { palette, mode } = Helper();

  return (
    <Box
      key={key}
      sx={{
        width: { xs: "100%", lg: "45%" },
        border: mode === "dark" ? 0 : 1,
        borderRadius: 5,
        p: 2,
        height: 350,

        bgcolor:
          mode === "dark" ? palette.secondary.light : palette.secondary.light,
      }}
    >
      {/* title and link */}
      <FlexBetween sx={{ mb: 2 }}>
        <Skeleton
          variant="rectangular"
          width={250}
          height={30}
          sx={{ borderRadius: 5 }}
        />
        <Skeleton variant="circular" width={30} height={30} />
      </FlexBetween>

      {/* images */}
      <Skeleton
        variant="rectangular"
        width="90%"
        height={200}
        sx={{ mx: "auto", mb: 2, borderRadius: 5 }}
      />
      {/* description */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={50}
        sx={{ mb: 2, borderRadius: 5 }}
      />
    </Box>
  );
};

export default ProjectSkeleton;
