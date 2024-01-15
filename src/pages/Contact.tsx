import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Helper from "../helpers";
import { Box, Button, TextField, Typography } from "@mui/material";
import FlexCenter from "../libs/FlexCenter";
import Flex from "../libs/Flex";

//icons
import RoomIcon from "@mui/icons-material/Room";
import FlexBetween from "../libs/FlexBetween";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CircularProgress from "@mui/material/CircularProgress";

//email js
import emailjs from "emailjs-com";

const Contact = () => {
  const { mode, isNonMobileScreens } = Helper();
  const color = mode === "light" ? "#000" : "#fff";

  // console.log(typeof process.env.REACT_APP_EMAIL_JS_SERVICE_ID);

  const [emailData, setEmailData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [successText, setSuccessText] = useState("");
  const [loading, setLoading] = useState(false);

  const { palette } = Helper();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      to_email: "enjamurisagar@gmail.com",
      to_name: emailData.firstName + " " + emailData.lastName,
      subject: "New message from your PORTFOLIO",
      message: `From: ${emailData.email}, message: ${emailData.message}`,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string, //service id
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string, //template id
        templateParams,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string //PUBLIC KEY
      )
      .then((response) => {
        setLoading(false);
        if (response.status === 200 && response.text === "OK") {
          setSuccessText("Message sent Successfully to me!!!");
          setEmailData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error: unknown) => {
        setLoading(false);
        if (error instanceof Error) {
          alert("Error: " + error.message);
        }
      });
  };
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
        contact me!
      </Typography>
      {/* maps */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243680.76957966873!2d78.54262687890626!3d17.38719857027796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705306595774!5m2!1sen!2sin"
        width="600"
        height="450"
        // style={{"border:0"}}
        // allowfullscreen
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        title="maps to contact"
        style={{
          border: 0,
          width: "95%",
          marginLeft: "2.5%",
          height: "50%",
          borderRadius: 10,
        }}
      />

      <Flex sx={{ my: 1, flexDirection: { xs: "column", lg: "row" } }}>
        {/* contact details left */}
        <Box width={{ xs: "100%", lg: "40%" }} my={2}>
          <FlexBetween
            sx={{
              width: "100%",
              my: 2,
              gap: { xs: 2, lg: undefined },
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            {/* location */}
            <FlexCenter
              sx={{ alignItems: "center", width: { xs: "100%", lg: "50%" } }}
            >
              <RoomIcon sx={{ color: palette.primary.main, mr: 1 }} />
              <Typography>7-14, Dameracherla,Telangana, India</Typography>
            </FlexCenter>
            <FlexCenter
              sx={{ alignItems: "center", width: { xs: "100%", lg: "50%" } }}
            >
              <EmailIcon sx={{ color: palette.primary.main, mr: 1 }} />
              <Typography>
                <a
                  href="mailto:enjamurisagar@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color }}
                >
                  enjamurisagar@gmail.com
                </a>
              </Typography>
            </FlexCenter>
          </FlexBetween>
          <FlexBetween sx={{ width: "100%" }}>
            {/* location */}
            <Flex
              sx={{
                alignItems: "center",

                justifyContent: { xs: "center", lg: "flex-start" },
                width: { xs: "90%", lg: "50%" },
              }}
            >
              <PhoneIcon sx={{ color: palette.primary.main, mr: 1 }} />
              <Typography>+91 7990921946</Typography>
            </Flex>
          </FlexBetween>
        </Box>
        {/* form right */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            mx: "auto",
            p: 1,
            backgroundColor: palette.background.paper,
            borderRadius: 5,
            // bgcolor: "magenta",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "700", my: 2 }}>
            text me!
          </Typography>
          {/* SUCCESS TEXT */}
          <Typography textAlign="center" sx={{ color: "rgb(0,200,0)" }}>
            {successText}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              label="First name"
              fullWidth
              required
              variant="standard"
              sx={{
                my: 1,
              }}
              value={emailData.firstName}
              onChange={(e) =>
                setEmailData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }))
              }
            />
            <TextField
              id="standard-basic"
              label="Last name"
              fullWidth
              variant="standard"
              sx={{ my: 1 }}
              value={emailData.lastName}
              onChange={(e) =>
                setEmailData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }))
              }
            />
            <TextField
              id="standard-basic"
              label="Email"
              placeholder="example@example.com"
              type="email"
              fullWidth
              required
              variant="standard"
              sx={{ my: 1, mb: 2 }}
              value={emailData.email}
              onChange={(e) =>
                setEmailData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />

            <textarea
              rows={5}
              style={{
                width: "100%",
                outline: "none",
                backgroundColor: "transparent",
                color: color,
                fontFamily: "Salsa",
                border: "none",
                borderBottom: `1px solid ${color}`,
                resize: "none",
                margin: "10px 0",
              }}
              placeholder="Your message*"
              required
              value={emailData.message}
              onChange={(e) =>
                setEmailData((prevData) => ({
                  ...prevData,
                  message: e.target.value,
                }))
              }
            />
            <Button fullWidth variant="contained" type="submit">
              {loading ? (
                <CircularProgress size={20} sx={{ color: "#fff" }} />
              ) : (
                "Send message"
              )}
            </Button>
          </form>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default Contact;
