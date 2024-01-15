import React from "react";
import Helper from "../helpers";
import { motion } from "framer-motion";
import FlexCenter from "../libs/FlexCenter";
import { Typography } from "@mui/material";

const PageNotFound = () => {
  const { isNonMobileScreens, mode } = Helper();
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        border: `2px solid ${mode === "dark" ? "#fff" : "#000"}`,
        borderRadius: 50,
        padding: !isNonMobileScreens ? 20 : 24,
        overflow: "scroll",
      }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FlexCenter sx={{ flexDirection: "column", gap: 4 }}>
        <FlexCenter sx={{ width: "100%" }}>
          <img
            src={require("../assets/404notfound-removebg-preview.png")}
            alt=""
            width={!isNonMobileScreens ? 300 : 800}
          />
        </FlexCenter>
        <Typography variant="h3" textAlign="center">
          Oops page NOT FOUND
        </Typography>
      </FlexCenter>
    </motion.div>
  );
};

export default PageNotFound;
