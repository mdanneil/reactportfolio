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
        style={{ minHeight: "100vh" }}
        // paddingY={3}
      >
        <Grid item width={{ xs: "90%", sm: "50%" }} textAlign={"center"}>
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
