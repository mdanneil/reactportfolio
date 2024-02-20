import React from "react";
import About from "./components/About";
import theme from "./theme";
import { Grid, Container, Paper, useMediaQuery } from "@mui/material";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  const isDesktop = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ position: "relative" }}>
      {!isDesktop && <Sidebar />}
      <Grid container spacing={0} width={"100%"}>
        <Grid item xs={12} width={"100%"}>
          <Grid container spacing={0}>
            <Grid
              paddingY={3}
              item
              xs={12}
              component={Paper}
              sx={{
                background: theme.light.primaryBackground,
                minHeight: "100vh",
              }}
            >
              <About />
            </Grid>
            <Grid
              paddingY={3}
              item
              xs={12}
              component={Paper}
              sx={{
                background: theme.light.secondaryBackground,
                minHeight: "100vh",
              }}
            >
              <Projects />
            </Grid>
            <Grid
              item
              xs={12}
              component={Paper}
              sx={{
                background: theme.light.primaryBackground,
                minHeight: "100vh",
              }}
              paddingY={3}
            >
              <Contact />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
