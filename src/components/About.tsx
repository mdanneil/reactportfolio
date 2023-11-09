import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
const imagePath: string = require("../assets/pfpimg.jpg");

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="om mig">
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <div
          style={{
            width: "300px", // Set your desired width
            height: "350px", // Set your desired height
            borderRadius: "20%", // Make it round
            overflow: "hidden", // Hide overflow to ensure a perfect circle
            marginBottom: "20px", // Add margin for spacing
          }}
        >
          <img
            src={imagePath}
            alt="Profile"
            style={{
              width: "100%", // Take up 100% of the container
              height: "auto", // Maintain aspect ratio
              display: "block", // Remove any default spacing issues
            }}
          />
        </div>
        <Grid
          item
          width={"50%"}
          textAlign={"center"}
          sx={{ backgroundColor: "#B0B0B0", borderRadius: "10px" }}
        >
          <Typography variant="h5">{t("About.about")}</Typography>
          <p></p>
          <Typography variant="h5">{t("About.personality")}</Typography>
          <p></p>
          <Typography variant="h5">{t("About.interests")}</Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
