import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const handleOpenResume = () => {
    const resumePath =
      "https://drive.google.com/file/d/1zlWb6gp0sGSd_stMG_ymYSIH3YH-xC8x/view?usp=sharing";
    window.open(resumePath, "_blank");
  };

  return (
    <section id="kontakt">
      <Container maxWidth="sm" id="Kontakt">
        <form
          action="https://public.herotofu.com/v1/348a8fd0-78af-11ee-b9fd-a16a30a6940d"
          method="post"
          acceptCharset="UTF-8"
        >
          <Typography variant="h4" align="center" gutterBottom>
            {t("Contact.contact")}
          </Typography>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("Contact.name")}
                id="name"
                type="text"
                name="Name"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("Contact.email")}
                id="email"
                type="email"
                name="Email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t("Contact.message")}
                id="message"
                name="Message"
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid container item xs={12} justifyContent="center" spacing={2}>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  {t("Contact.submit")}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOpenResume}
                >
                  {t("Contact.viewResume")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
