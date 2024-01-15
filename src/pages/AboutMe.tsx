import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Helper from "../helpers";

//framer-motion
import { motion } from "framer-motion";
import SpanPrimaryColor from "../libs/SpanPrimaryColor";
import FlexBetween from "../libs/FlexBetween";

//icons
import { FaCode } from "react-icons/fa6";
import { IoServerOutline } from "react-icons/io5";
import { GoShieldX } from "react-icons/go";
import { FaMobileAlt } from "react-icons/fa";
import SkillButton from "../components/SkillButton";

//db
import { firestore } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";
import Education from "../components/Education";

// type SkillsType = {
//   skills : string[];
// }
const AboutMe = () => {
  const { mode, isNonMobileScreens, palette } = Helper();
  const [skills, setSkills] = useState<{ [x: string]: any }[]>([]);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    try {
      const collectionRef = collection(firestore, "skills");
      const snapshot = await getDocs(collectionRef);

      const data = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      setSkills(data);
    } catch (error: unknown) {
      // Handle the error
      if (error instanceof Error) {
        alert("Caught an error:" + error.message);
      }
    }
  }

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        border: `2px solid ${mode === "dark" ? "#fff" : "#000"}`,
        borderRadius: 30,
        padding: !isNonMobileScreens ? 20 : 24,
        // marginRight: !isNonMobileScreens ? 15 : 0,
        // backgroundColor:
        //   mode === "dark" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.7)",
        // backgroundColor: palette.secondary.light,
      }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          overflowY: { xs: "scroll", lg: "visible" },
        }}
      >
        {/* left img*/}
        <Box
          width={{ xs: "100%", lg: "50%" }}
          display="flex"
          justifyContent="center"
        >
          {/* image */}
          <Box
            width={{ xs: "100%", lg: "60%" }}
            display="flex"
            justifyContent="center"
          >
            <img
              src={require("../assets/me.jpg")}
              alt="me"
              height="100%"
              width={!isNonMobileScreens ? "250" : "400"}
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        {/* right data*/}
        <Box
          width={{
            xs: "100%",
            lg: "50%",
          }}
          sx={{
            overflowY: { xs: undefined, lg: "scroll" },
          }}
        >
          {/* top */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h1" sx={{ fontWeight: "700", my: 2 }}>
              about me
            </Typography>
            <Typography variant="h4" sx={{ fontStyle: "italic" }}>
              <span
                style={{ color: palette.primary.main, marginRight: "10px" }}
              >
                21 years
              </span>
              /{" "}
              <span style={{ color: palette.primary.main, margin: "0 10px" }}>
                Hyderabad{" "}
              </span>{" "}
              /{" "}
              <span style={{ color: palette.primary.main, marginLeft: "10px" }}>
                Developer
              </span>
            </Typography>
          </Box>
          {/* <Divider /> */}
          {/* middle */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1.5,
              }}
            >
              🚀 Hey, I'm{" "}
              <span style={{ color: palette.primary.main }}>
                {" "}
                ENJAMURI SAGAR
              </span>
              , a MERN stack enthusiast on a mission to craft dynamic and
              cutting-edge web applications, mostly focusing on{" "}
              <SpanPrimaryColor> Front end. </SpanPrimaryColor>
              My journey involves harnessing the power of{" "}
              <SpanPrimaryColor> React</SpanPrimaryColor> to create engaging
              user interfaces, and <SpanPrimaryColor> Node.js</SpanPrimaryColor>{" "}
              to tie it all together seamlessly and{" "}
              <SpanPrimaryColor>MongoDB</SpanPrimaryColor> for scalable database
              solutions, <SpanPrimaryColor>Express.js</SpanPrimaryColor> to
              streamline server-side development ...
            </Typography>
          </Box>
          <Divider />
          {/* my services */}
          <Box sx={{ my: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: "700", my: 2 }}>
              my services
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              width="100%"
              flexWrap="wrap"
              gap={4}
              justifyContent="center"
              alignItems="center"
              sx={{ my: 5 }}
            >
              {/* FRONTEND */}
              <Box
                width={{ xs: "90%", md: "45%" }}
                height={150}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: `1px solid ${
                    mode === "light"
                      ? palette.secondary.main
                      : palette.secondary.light
                  }`,
                  borderRadius: 5,
                  p: 1,

                  // gap: ,
                }}
              >
                {/* top */}
                <FlexBetween sx={{ mx: 1 }}>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    Frontend
                  </Typography>
                  <Typography>
                    <FaCode
                      style={{ fontSize: "25px", color: palette.primary.main }}
                    />
                  </Typography>
                </FlexBetween>
                {/* bottom */}
                <Typography>
                  Building creative appealing and interactive user interfaces
                  with light/dark mode and many other functionalities...
                </Typography>
              </Box>
              {/* BACKEND */}
              <Box
                width={{ xs: "90%", md: "45%" }}
                height={150}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: `1px solid ${
                    mode === "light"
                      ? palette.secondary.main
                      : palette.secondary.light
                  }`,
                  borderRadius: 5,
                  p: 1,
                  // overflow: "scroll",
                  // gap: ,
                }}
              >
                {/* top */}
                <FlexBetween sx={{ mx: 1 }}>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    Backend
                  </Typography>
                  <Typography>
                    <IoServerOutline
                      style={{ color: palette.primary.main, fontSize: "25px" }}
                    />
                  </Typography>
                </FlexBetween>
                {/* bottom */}
                <Typography>
                  Building the server-side logic and database components that
                  power websites and applications...
                </Typography>
              </Box>
              {/* SECURITY */}
              <Box
                width={{ xs: "90%", md: "45%" }}
                height={150}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: `1px solid ${
                    mode === "light"
                      ? palette.secondary.main
                      : palette.secondary.light
                  }`,
                  borderRadius: 5,
                  p: 1,
                  // overflow: "scroll",
                  // gap: ,
                }}
              >
                {/* top */}
                <FlexBetween sx={{ mx: 1 }}>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    Web security
                  </Typography>
                  <Typography>
                    <GoShieldX
                      style={{ color: palette.primary.main, fontSize: "25px" }}
                    />
                  </Typography>
                </FlexBetween>
                {/* bottom */}
                <Typography sx={{ mb: 2 }}>
                  Implementing security measures to protect against common web
                  vulnerabilities...
                </Typography>
              </Box>
              {/* RESPONSIVE */}
              <Box
                width={{ xs: "90%", md: "45%" }}
                height={150}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: `1px solid ${
                    mode === "light"
                      ? palette.secondary.main
                      : palette.secondary.light
                  }`,
                  borderRadius: 5,
                  p: 1,
                  // overflow: "scroll",
                  // gap: ,
                }}
              >
                {/* top */}
                <FlexBetween sx={{ mx: 1 }}>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    Responsive design
                  </Typography>
                  <Typography>
                    <FaMobileAlt
                      style={{ color: palette.primary.main, fontSize: "25px" }}
                    />
                  </Typography>
                </FlexBetween>
                {/* bottom */}
                <Typography sx={{ mb: 2 }}>
                  Providing an optimal user experience across desktops, tablets,
                  and smartphones...
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Divider />
          {/* skills */}
          <Box sx={{ my: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: "700", mb: 2 }}>
              skills
            </Typography>

            <Stack
              direction="row"
              width="100%"
              flexWrap="wrap"
              gap={2}
              // justifyContent="center"
              // alignItems="center"
              sx={{ my: 5 }}
            >
              {skills?.map((skill, i) => (
                <SkillButton>{skill.skill}</SkillButton>
              ))}
            </Stack>
          </Box>

          <Divider />
          {/* education */}
          <Box sx={{ my: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: "700", mb: 2 }}>
              education
            </Typography>
            <Education />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutMe;
