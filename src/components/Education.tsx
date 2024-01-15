import { Box } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Helper from "../helpers";

//icons
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Education = () => {
  const { mode, palette } = Helper();
  const color = mode === "light" ? "#fff" : "#000";
  const background = mode === "dark" ? "#fff" : "rgba(0,0,0,0.8)";

  return (
    <Box width="100%">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: background,
            color: color,
          }}
          contentArrowStyle={{
            borderRight: `7px solid  ${background}`,
          }}
          date="2021 - 2024"
          dateClassName={
            mode === "light"
              ? "dateOfEducationRightLight"
              : "dateOfEducationRightDark"
          }
          iconStyle={{ background: palette.primary.main, color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors of Tech.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">EEE</h4>
          <p>
            <a
              href="https://www.vardhaman.org/"
              target="_blank"
              rel="noreferrer"
              style={{ color: color }}
            >
              Vardhaman College of Engineering.
            </a>
          </p>
          <p>Hyderabad, India.</p>
          <p>9.28 CGPA</p>
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
          date="2018 - 2021"
          dateClassName={
            mode === "light"
              ? "dateOfEducationLeftLight"
              : "dateOfEducationLeftDark"
          }
          iconStyle={{ background: palette.primary.main, color: "#fff" }}
          icon={<EngineeringIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma (Polytechnic)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">EEE</h4>
          <p>
            <a
              href="https://sbtet.telangana.gov.in/"
              target="_blank"
              rel="noreferrer"
              style={{ color: color }}
            >
              Government Polytechnic College.
            </a>
          </p>
          <p>Nalgonda, Telangana.</p>
          <p>9.99 CGPA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" - 2018"
          dateClassName={
            mode === "light"
              ? "dateOfEducationRightLight"
              : "dateOfEducationRightDark"
          }
          contentStyle={{
            background: background,
            color: color,
          }}
          contentArrowStyle={{
            borderRight: `7px solid  ${background}`,
          }}
          iconStyle={{ background: palette.primary.main, color: "#fff" }}
          icon={<MenuBookIcon />}
        >
          <h3 className="vertical-timeline-element-title">Schooling</h3>
          <h4 className="vertical-timeline-element-subtitle">till SSC</h4>

          <p>
            <a
              href="https://telanganams.cgg.gov.in/"
              target="_blank"
              rel="noreferrer"
              style={{ color: color }}
            >
              Telangana State Model School.
            </a>
          </p>
          <p>Bothalapalem, Telangana.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Education;
