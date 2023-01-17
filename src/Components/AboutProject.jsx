import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

//css
import "../assest/CSS/AboutProject.css";

function AboutProject() {
  return (
    <Grid
      container
      sx={{
        py: 8,
        justifyContent: "space-evenly",
        "@media(max-width:450px)": { py: 1 },
      }}
      spacing={1}
      className="ProjectSection"
    >
      <Grid
        item
        md={10}
        xs={11}
        sx={{ px: 5, "@media(max-width:450px)": { px: 2 } }}
      >
        <Typography
          variant="body1"
          fontSize="35px"
          fontWeight="700"
          color="rgba(25,25,25,0.5)"
          sx={{
            "@media(max-width:450px)": {
              fontSize: "10px",
              textAlign: "center",
            },
          }}
        >
          <Box component="span" color="black">
            Look at our projects.
          </Box>{" "}
          You will not remain indifferent after watching. Randomised words which
          don’t look. If passage words you are going to use a passage words
          which don’t look of you need to be sure.
        </Typography>
      </Grid>

      {/* Project Explore Btn for medium screen */}
      <Grid
        item
        md={10}
        sx={{ "@media(max-width:900px)": { display: "none" } }}
      >
        <Typography className="servicesArrow"></Typography>
        <Button
          variant="text"
          sx={{
            fontWeight: "700",
            fontSize: "15px",
            position: "relative",
            left: "150px",
            color: "#191919",
          }}
          className="projectBtn"
        >
          Discover Now
        </Button>
      </Grid>

      {/* mobile version project explore Btn*/}
      <Grid item xs={4} sm={4}>
        <Button
          variant="outlined"
          sx={{
            display: "none",
            fontSize:"8px",
            mt:2,
            "@media(max-width:900px)": { display: "block" },
          }}
          className="projectBtnMobile"
        >
          Discover Now
        </Button>
      </Grid>
    </Grid>
  );
}

export default AboutProject;
