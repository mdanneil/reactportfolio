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
            width: "300px",
            height: "350px",
            borderRadius: "20%",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          {/* <img
            src={imagePath}
            alt="Profile"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          /> */}
        </div>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          width={"50%"}
          textAlign={"center"}
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
