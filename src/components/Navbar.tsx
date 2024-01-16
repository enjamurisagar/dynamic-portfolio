/* eslint-disable react-hooks/exhaustive-deps */
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Flex from "../libs/Flex";

//icons
import { GrInspect } from "react-icons/gr";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { IoMdCloudDownload } from "react-icons/io";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";

//helpers
import Helper from "../helpers";

// type CustomObject = {
//   [x: string]: string;
//   "/": string;
//   projects: string;
//   skills: string;
//   contact: string;
// };

const Navbar = () => {
  const {
    mode,
    palette,
    isNonMobileScreens,
    navigate,
    location,
    dispatch,
    setMode,
  } = Helper();

  const [menuActive, setMenuActive] = useState([
    { menuItem: "about", active: true },
    { menuItem: "projects", active: false },
    { menuItem: "experience", active: false },
    { menuItem: "contact", active: false },
  ]);

  const handleMenuActive = (menuItem: string, path: string) => {
    navigate(path);
    const updatedMenuActive = menuActive.map((menu) => {
      return menu.menuItem === menuItem
        ? { ...menu, active: true }
        : { ...menu, active: false };
    });
    setMenuActive(updatedMenuActive);
  };
  const currentPath = location.pathname;

  useEffect(() => {
    const paths = {
      "/": "about",
      "/projects": "projects",
      "/experience": "experience",
      "/contact": "contact",
    };
    const presentMenuItem = (paths as any)[currentPath];
    console.log(presentMenuItem);
    const updatedMenuActive = menuActive.map((menu) => {
      return menu.menuItem === presentMenuItem
        ? { ...menu, active: true }
        : { ...menu, active: false };
    });
    setMenuActive(updatedMenuActive);
  }, []);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        border: 2,
        height: { xs: "60%", lg: "90%" },
        width: "100%",
        borderRadius: 10,
        py: 2,
        alignItems: "center",
      }}
    >
      {/* mode icon */}
      <Box>
        <IconButton onClick={() => dispatch(setMode())}>
          {mode === "dark" ? (
            <LightModeIcon />
          ) : (
            <BedtimeIcon sx={{ color: "#000" }} />
          )}
        </IconButton>
      </Box>
      {/* menu Items */}
      <Box
        // bgcolor="red"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <FaUserLarge
          style={{
            fontSize: "20px",
            cursor: isNonMobileScreens ? "pointer" : undefined,
            color: menuActive[0].active ? palette.primary.main : undefined,
            transform: menuActive[0].active ? "scale(1.5)" : undefined,
            transition: ".3s",
          }}
          onClick={() => handleMenuActive("about", "/")}
        />

        <GrInspect
          style={{
            fontSize: "20px",
            cursor: isNonMobileScreens ? "pointer" : undefined,
            color: menuActive[1].active ? palette.primary.main : undefined,
            transform: menuActive[1].active ? "scale(1.5)" : undefined,
            transition: ".3s",
          }}
          onClick={() => handleMenuActive("projects", "/projects")}
        />

        <MdOutlineBusinessCenter
          style={{
            fontSize: "20px",
            cursor: isNonMobileScreens ? "pointer" : undefined,
            color: menuActive[2].active ? palette.primary.main : undefined,
            transform: menuActive[2].active ? "scale(1.5)" : undefined,
            transition: ".3s",
          }}
          onClick={() => handleMenuActive("experience", "/experience")}
        />
        <BiMessageRounded
          style={{
            fontSize: "20px",
            cursor: isNonMobileScreens ? "pointer" : undefined,
            color: menuActive[3].active ? palette.primary.main : undefined,
            transform: menuActive[3].active ? "scale(1.5)" : undefined,
            transition: ".3s",
          }}
          onClick={() => handleMenuActive("contact", "/contact")}
        />
      </Box>

      {/* bottom */}
      <a href="/Enjamuri Sagar - Resume.pdf" download className="resume-btn">
        <IoMdCloudDownload
          style={{
            fontSize: "25px",
            cursor: isNonMobileScreens ? "pointer" : undefined,
            color: mode === "light" ? "#000" : "#fff",
          }}
        />
      </a>
    </Flex>
  );
};

export default Navbar;
