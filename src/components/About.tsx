import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="om mig">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Typography variant="h5">{t("About.about")}</Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
