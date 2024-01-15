import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Box, Stack, Typography } from "@mui/material";
//helpers
import Helper from "../helpers";
//db
import { firestore } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";

//icons
import CircularProgress from "@mui/material/CircularProgress";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FlexBetween from "../libs/FlexBetween";
import { Typography } from "@mui/material";

type ExperienceType = {
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  location: string;
  link: string;
};

const Experience = () => {
  const { isNonMobileScreens, mode, palette } = Helper();
  const [loading, setLoading] = useState<boolean>(false);
  const [experience, setExperience] = useState<ExperienceType[]>([]);

  const color = mode === "light" ? "#fff" : "#000";
  const background = mode === "dark" ? "#fff" : "rgba(0,0,0,0.8)";

  useEffect(() => {
    getExperience();
  }, []);

  async function getExperience() {
    try {
      setLoading(true);
      const collectionRef = collection(firestore, "experience");
      const snapshot = await getDocs(collectionRef);
      const data: ExperienceType[] = snapshot.docs.map((doc) => {
        return {
          title: doc.data().title as string,
          company: doc.data().company as string,
          role: doc.data().role as string,
          duration: doc.data().duration as string,
          description: doc.data().description as string,
          location: doc.data().location as string,
          link: doc.data().link as string,
        };
      });
      setExperience(data.reverse());
      setLoading(false);
    } catch (error: unknown) {
      // Handle the error
      if (error instanceof Error) {
        setLoading(false);
        alert("Caught an error:" + error.message);
      }
    }
  }
  console.log(experience);
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        border: `2px solid ${mode === "dark" ? "#fff" : "#000"}`,
        borderRadius: 30,
        padding: !isNonMobileScreens ? 20 : 24,
        overflow: "scroll",
      }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h1" sx={{ fontWeight: "700", my: 2 }}>
        experience
      </Typography>
      <VerticalTimeline>
        {loading ? (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: color,
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${background}`,
              }}
              iconStyle={{ background: palette.primary.main, color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <CircularProgress />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: color,
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${background}`,
              }}
              iconStyle={{ background: palette.primary.main, color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <CircularProgress />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: color,
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${background}`,
              }}
              iconStyle={{ background: palette.primary.main, color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <CircularProgress />
            </VerticalTimelineElement>
          </>
        ) : (
          experience.map((exp, i) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: color,
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${background}`,
              }}
              iconStyle={{ background: palette.primary.main, color: "#fff" }}
              icon={<EngineeringIcon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <FlexBetween
                sx={{
                  flexDirection: { xs: "column", lg: "row" },
                }}
              >
                <h4 className="vertical-timeline-element-subtitle">
                  At{" "}
                  <a href={exp.link} target="_blank" rel="noreferrer">
                    {" "}
                    {exp.company}
                  </a>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {exp.duration}
                </h4>
              </FlexBetween>
              {/* desc */}
              <p>{exp.description}</p>
              <p>{exp.location}</p>
            </VerticalTimelineElement>
          ))
        )}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience;
