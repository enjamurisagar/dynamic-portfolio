import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Helper from "../helpers";
import { Box, Stack, Typography } from "@mui/material";
import Project from "../components/Project";

//db
import { firestore } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProjectSkeleton from "../components/ProjectSkeleton";

//types
interface projectType {
  id: string;
  title: string;
  images: string[];
  skills: string[];
  link: string;
  description: string;
}

const Projects = () => {
  const { mode, isNonMobileScreens } = Helper();
  const [projects, setProjects] = useState<projectType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const me = require("../assets/eComm-3.png");

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      setLoading(true);
      const collectionRef = collection(firestore, "projects");
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          skills: doc.data().skills,
          images: doc.data().images,
          link: doc.data().link,
        };
      });
      setProjects(data.reverse());
      setLoading(false);
    } catch (error: unknown) {
      // Handle the error
      if (error instanceof Error) {
        setLoading(false);
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
        overflow: "scroll",
      }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontWeight: "700", my: 2 }}>
          projects
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          width="100%"
          flexWrap="wrap"
          gap={4}
          justifyContent="space-around"
          alignItems="center"
          sx={{ my: 5 }}
        >
          {loading
            ? [0, 0, 0, 0].map((dummyItem, i) => <ProjectSkeleton key={i} />)
            : projects?.map((project, i) => (
                <Project
                  title={project?.title}
                  images={project?.images}
                  description={project?.description}
                  skills={project?.skills}
                  link={project?.link}
                  key={i}
                />
              ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Projects;
