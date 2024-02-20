import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
const stcImage: string = require("../assets/stcimg.jpeg");
const squeekImage: string = require("../assets/geeksqueekimg.jpeg");

const Projects = () => {
  return (
    <section id="projekt">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        spacing={2} // Add spacing between Grid items
      >
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Typography variant="h5">Projekt</Typography>
        </Grid>
        <Grid container item spacing={2} justifyContent="center">
          {" "}
          {/* Add container and spacing */}
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={stcImage}
                title="STC React Native"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  STC React Native
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React Native STC, en React Native-applikation för att visa
                  STCs olika gym, de olika gymmens pass samt tillgänglighet för
                  passen.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() =>
                    window.open("https://github.com/mdanneil/react-native-stc")
                  }
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={squeekImage}
                title="GeekSqueek"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GeekSqueek
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GeekSqueek, a social media platform designed for geeks to
                  connect, share interests, and discover new content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() =>
                    window.open("https://github.com/mdanneil/geeksqueek")
                  }
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
