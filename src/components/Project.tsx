import { Box, IconButton, Typography, Stack, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlexBetween from "../libs/FlexBetween";
import LaunchIcon from "@mui/icons-material/Launch";
import Helper from "../helpers";

type projectType = {
  title: string;
  images: string[];
  description: string;
  link: string;
  skills: string[];
  key: number;
};

const Project = ({
  title,
  images,
  description,
  link,
  skills,
  key,
}: projectType) => {
  const { palette, mode, isNonMobileScreens } = Helper();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: isNonMobileScreens ? true : false,

    // autoplaySpeed: 3500,
  };

  return (
    <Box
      key={key}
      sx={{
        width: { xs: "100%", lg: "45%" },
        // bgcolor: "red",
        border: mode === "dark" ? 0 : 1,
        borderRadius: 3,
        p: 2,
        pt: 0,
        height: 350,
        overflow: "scroll",
        bgcolor:
          mode === "dark" ? palette.secondary.light : palette.secondary.light,
      }}
    >
      {/* top */}
      <FlexBetween
        sx={{
          mb: 1,
          position: "sticky",
          top: 0,
          bgcolor:
            mode === "dark" ? palette.secondary.light : palette.secondary.light,
          zIndex: 1,
          pt: 2,
        }}
      >
        <Typography sx={{ textOverflow: "hidden" }} variant="h5">
          {title}
        </Typography>
        <Typography>
          <IconButton href={link} target="_blank">
            <LaunchIcon />
          </IconButton>
        </Typography>
      </FlexBetween>

      {/* images */}

      <Box width="90%" mx="auto" mb={2}>
        <Slider {...settings}>
          {images.map((image, i) => (
            <img
              src={image}
              alt="project pic"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
              }}
            />
          ))}
        </Slider>
      </Box>

      {/* desc */}

      <Box>
        <Typography>{description}</Typography>
      </Box>

      {/* skills */}
      <Stack direction="row" width="90%" flexWrap="wrap" sx={{ my: 2 }} gap={2}>
        {skills.map((skill, i) => (
          <Button sx={{ border: 1, p: 0.5 }}>{skill}</Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Project;
